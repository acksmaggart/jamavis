/*
* This class represents, and is in charge of generating the visual components for one csv file, i.e. it
* will generate a group bar and a bar for each result column that is present in the data file.
* */

class OldView {
    constructor(results, div){
        this.data = results.data;
        this.title = results.name;
        this.id = results.id;

        this.modelNameMap = {
            "CNN" : {name: "Convolutional Neural Network", index: 2},
            "ET" : {name: "Extra Trees", index: 1},
            "SVM" : {name: "Support Vector Machine", index: 0},
            "PyConText": {name: "PyConText", index: 3}
        };

        this.groupSizes = this.determineGroupSizes();
        this.viewWidth = 1200;
        this.titleBlockAreaHeight = 60; //Total height for the title space.
        this.groupBarAreaHeight = 30; //Total height for the group bars space.
        this.resultsBarAreaHeight = 50; //Total height for the results bars space.

        this.groupVertGap = 30;
        this.groupHorizGap = 15;
        this.groupHeight = 20;
        this.resultsHeight = 30;
        this.resultsBarVertOffset = 20;
        this.resultsTextVertOffset = 15;
        this.resultTextSize = 16;
        this.titleTextVertOffset = 40;
        this.titleTextSize = 24;

        this.groupSizePadding = 1;


        this.container = div;
        this.drawingArea = this.container.append("svg")
            .attr("height", "100%")
            .attr("width", this.viewWidth);
        this.titleGroup = this.drawingArea.append("g").attr("id", "titleGroup" + this.id);
        this.groupBarsGroup = this.drawingArea.append("g").attr("id", "groupBarsGroup" + this.id);
        this.resultsBarsGroup = this.drawingArea.append("g").attr("id", "resultsBarsGroup" + this.id);

        [this.groupWidths, this.groupStarts] = this.determineGroupWidthsAndStarts();

        //Make individual group scales:
        this.groupScales = this.groupWidths.map((width, index)=>{
            let groupSize = this.groupSizes[index];
            return d3.scaleLinear().domain([0, groupSize - 1]).range([0, width]);
        });

        this.groupColorScale = d3.scaleQuantize()
            .domain([0, this.groupWidths.length - 1])
            .range(["#05E5E8", "#00D9DB", "#FF9C00", "#FFAB00"]);

        this.update()
    }


    update(){
        this.makeTitle();
        this.makeGroupsBar();
        this.makeResultsBars();
    }

    makeGroupsBar(){

        let groupBars = this.groupBarsGroup.selectAll("rect").data(this.groupSizes);
        groupBars.exit().remove();
        groupBars = groupBars.enter().append("rect").merge(groupBars);

        groupBars.attr("height", this.groupHeight)
            .attr("width", (d, i)=>{
                return this.groupWidths[i]
            })
            .attr("x", (d, i)=>{
                return this.groupStarts[i]
            })
            .attr("y", this.titleBlockAreaHeight)
            .attr("fill", (d)=>{
                let groupNo = this.groupSizes.indexOf(d);
                let fill = this.groupColorScale(groupNo);
                return fill;
            });

    }

    makeResultsBars(){
        //Extract model names from data:
        let modelNames = [];
        let modelKeys = [];

        const firstDatum = this.data[0];
        for (let [key, value] of Object.entries(firstDatum)){
            let lowerKey = key.toLowerCase();
            if (lowerKey.includes("prediction")){
                let parts = key.split("_");
                let modelName = this.modelNameMap[parts[0]].name;
                let modelIndex = this.modelNameMap[parts[0]].index;
                modelNames[modelIndex] = modelName;
                modelKeys[modelIndex] = key;
            }
        }

        //Set bounding div size now that we know how many models there are.
        let numModels = modelNames.length;
        let divHeight = this.titleBlockAreaHeight + this.groupBarAreaHeight + (numModels * this.resultsBarAreaHeight)
        this.container.attr("style", `height: ${divHeight}px`);

        // Determine model bar "y" positions:
        let modelYPositions = [];
        let cumSum = this.titleBlockAreaHeight + this.groupBarAreaHeight;
        for (let size of this.groupSizes){
            modelYPositions.push(cumSum);
            cumSum += this.resultsBarAreaHeight;
        }

        modelNames.map((name, index)=>{
            let key = modelKeys[index];
            let y = modelYPositions[index];
            this.makeSingleModelbar(name, key, y);
        })
    }

    makeSingleModelbar(modelName, modelKey, y){
        let resultGroupId = modelName + "ResultGroup";
        let currentGroup = this.resultsBarsGroup.selectAll("g#" + resultGroupId).data(["yeehah!"]);
        currentGroup = currentGroup.enter().append("g")
            .attr("id", resultGroupId)
            .attr("transform", `translate(0, ${y})`)
            .merge(currentGroup);


        let resultRects = currentGroup.selectAll("rect").data(this.data);
        resultRects.exit().remove();
        resultRects = resultRects.enter().append("rect").merge(resultRects);

        resultRects.attr("height", this.resultsHeight)
            .attr("width", (d)=>{
                let group = +d.group;
                let numMembers = this.groupSizes[group];
                let groupWidth = this.groupWidths[group];
                return groupWidth / numMembers;
            })
            .attr("y", this.resultsBarVertOffset)
            .attr("x", (d)=>{
                let group = +d.group;
                let groupOffset = this.groupStarts[group];
                let sortOrder = +d.modelSortOrder;
                let scaleOffset = this.groupScales[group](sortOrder);
                return scaleOffset + groupOffset;
            })
            .attr("fill", (d)=>{
                let prediction = +d[modelKey];
                let truth = d.gold;
                let fillOn = false;
                if (prediction == truth){
                    fillOn = true
                }
                if (fillOn){
                    return "#E8E8E8";
                }
                else {
                    return "red";
                }
            });
        //Add the model name
        let modelText = currentGroup.selectAll("text").data([modelName]);
        modelText.exit().remove();
        modelText = modelText.enter().append("text").merge(modelText);

        modelText.text(modelName)
            .classed("modelNameText", true)
            .attr("x", 0)
            .attr("y", this.resultsTextVertOffset)
            .attr("font-size", this.resultTextSize)
            .attr("font-family", "sans-serif");
    }

    determineGroupSizes(){
        //Returns list of group sizes, in order
        const groupInfo = {};
        this.data.map((docData, index)=>{
            let group = docData.group;
            if (!groupInfo.hasOwnProperty(group)){
                groupInfo[group] = 0
            }
            groupInfo[group]++;
        });
        let keys = Object.keys(groupInfo).map((key)=>{ return +key});
        let maxKey = Math.max(...keys);
        let sizes = new Array(maxKey + 1).fill(0);
        for (let [group, count] of Object.entries(groupInfo)){
            sizes[+group] = count;
        }
        return sizes;
    }

    determineGroupWidthsAndStarts(){
        const numGroups = this.groupSizes.length;
        const totalPadding = this.groupHorizGap * (numGroups - 1);
        const barSpace = this.viewWidth - totalPadding;
        const paddedGroupSizes = this.groupSizes.map((size)=>{return size + this.groupSizePadding});
        const adjustmentFactor = barSpace / paddedGroupSizes.reduce((prev, current)=>{return prev + current});
        const adjustedWidths = paddedGroupSizes.map((size)=>{ return size * adjustmentFactor});
        const groupStarts = new Array(numGroups);
        let cumSum = 0;
        let count = 0;
        for (let width of adjustedWidths){
            groupStarts[count] = cumSum;
            cumSum += width + this.groupHorizGap;
            count++;
        }
        return [adjustedWidths, groupStarts]
    }

    makeTitle(){
        let titleText = this.titleGroup.append("text");
        titleText.text(this.title)
            .attr("font-family", "sans-serif")
            .attr("font-size", this.titleTextSize)
            .attr("x", 0)
            .attr("y", this.titleTextVertOffset);
    }
}


/*
* T_DS_Training_Predictions
:
"1"
SVM_DS_Training_Predictions
:
"1"
customSortOrder
:
"171"
customSortScore
:
"159.924510244"
gold
:
"1"
group
:
"3"
modelSortOrder
:
"56"
modelSortScore
:
"-12.337991767"
names
:
"731376"
*/