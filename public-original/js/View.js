//Default bins is 1000


class View {
    constructor(results, div){
        this.div = div;
        this.defaultNumBins = 300;
        this.data = results.data;
        this.title = results.name;
        this.id = results.id;
        this.svmBinInfo = {}; //will be supplied by binData() to allow for zero-line positioning

        this.modelPerformance = this.computeModelPerformance(results);
        this.modelNameMap = {
            "CNN" : {name: "Convolutional Neural Network", index: 2},
            "ET" : {name: "Extra Trees", index: 1},
            "SVM" : {name: "Support Vector Machine", index: 0},
            "PyConText": {name: "PyConText", index: 3}
        };
        this.performanceMetricMap = {
            accuracy : {displayName : "Accuracy",
        				index : 0},
            recall : {displayName : "Sensitivity",
        				index : 1},
            precision : {displayName : "PPV",
        				index : 2},
            fScore : {displayName : "F-Score",
        				index : 3},
            npv : {displayName : "NPV",
        				index : 4},
            specificity : {displayName : "Specificity",
        				index : 5}
        };

        //Extract model names from data:
        this.modelNames = [];
        this.modelKeys = [];
        this.modelIndices = [];

        const firstDatum = this.data[0];
        for (let [key, value] of Object.entries(firstDatum)){
            let lowerKey = key.toLowerCase();
            if (lowerKey.includes("prediction")){
                let parts = key.split("_");
                let modelName = this.modelNameMap[parts[0]].name;
                let modelIndex = this.modelNameMap[parts[0]].index;
                this.modelNames[modelIndex] = modelName;
                this.modelKeys[modelIndex] = key;
                this.modelIndices[modelIndex] = modelIndex;
            }
        }

        //Determine min and max scores:
        const scores = this.data.map((d)=>{return +d.RealSVMScore});
        this.maxScore = Math.max(...scores);
        this.minScore = Math.min(...scores);


        //Create the binning scale
        const binScaleRange = [...Array(this.defaultNumBins).keys()];
        this.binScale = d3.scaleQuantize().domain([this.minScore, this.maxScore]).range(binScaleRange);


        // Formatting
        this.svgContainerWidth = 1600;
        this.svgContainerHeight = 800;
        this.leftOfChartMargin = 300;
        this.rightOfChartMargin = 10;
        this.chartWidth = this.svgContainerWidth - this.leftOfChartMargin - this.rightOfChartMargin;
        this.scaleBoxHeight = 70;
        this.barHeightForOneNote = 7;
        this.maxBarHeight = 40;
        this.posNegSpacing = 30;
        this.singleModelResultHeight = (this.maxBarHeight * 2) + this.posNegSpacing;
        this.interModelResultSpacing = 75;
        this.correctFill = "#0074A8";
        this.incorrectFill = "#FF2E29";


        // Tooltip
        this.tip =d3.tip()
            .attr("class", "d3-tip")
            .direction((d)=>{
                let northSouth = "";
                let eastWest = "";
                //Determine north south
                if (cursorY < 500){
                    northSouth = "s";
                }
                else if (window.innerHeight - cursorY < 300){
                    northSouth = "n";
                }

                //Determine east west
                if (cursorX < 700){
                eastWest = "e";
                }
                else {
                    eastWest = "w";
                }
                return northSouth + eastWest;
            })
            .offset((d)=>{
                let yOffset = 0;
                let xOffset = -10;
                if (cursorX < 700) {
                    xOffset = 10;
                }
                return [yOffset, xOffset];
            })
            .html((d)=>{
                //Return a table of the correctly and incorrectly classified note names.
                return this.createTableHtml(d);
            });

        // Container
        this.svgContainer = div.append("svg");
        this.svgContainer.attr("width", this.svgContainerWidth)
            .attr("height", this.svgContainerHeight);


        //Create the bin position scale
        this.binPositionScale = d3.scaleLinear().domain([0, this.defaultNumBins]).range([this.leftOfChartMargin, this.chartWidth + this.leftOfChartMargin]);

        this.makeTitle();

        //Render it baby!
        this.update();

        this.makeScale();
    }


    update(){

        //Make single result bars - includes model name, pos neg labels, and bars.
        for (let i = 0; i < this.modelNames.length; i++){
            let modelName = this.modelNames[i];
            let modelIndex = this.modelIndices[i];
            let modelKey = this.modelKeys[i];

            let resultOffset = modelIndex * (this.singleModelResultHeight + this.interModelResultSpacing) + this.scaleBoxHeight;
            let resultGroup = this.svgContainer.selectAll("g." + modelKey).data(["ha!"]);
            resultGroup.exit().remove();
            resultGroup = resultGroup.enter().append("g").call(this.tip).merge(resultGroup);
            resultGroup.classed(modelKey, true)
                .attr("transform", `translate(0,${resultOffset})`);

            this.makeSingleResultBar(modelName, modelKey, resultGroup);
        }
    }

    makeTitle(){
        let title = this.div.insert("h2", ":first-child");
        title.text(this.title);
    }

    makeScale(){
        let tickWidth = 2;
        let zeroLineWidth = 2;
        let zeroLineFill = "#757575";
        let tickHeight = 20;
        let tickFill = "#616161";
        let tickBottomMargin = 30;

        let scaleGroup = this.svgContainer.insert("g", ":first-child")
            .classed("scale", true)
            .attr("transform", `translate(${this.leftOfChartMargin}, ${this.scaleBoxHeight - tickBottomMargin}) scale(1, -1)`);

        let leftTick = scaleGroup.append("rect")
            .classed("left-tick", true)
            .attr("x", 0)
            .attr("y", 0)
            .attr("fill", tickFill)
            .attr("height", tickHeight)
            .attr("width", tickWidth);

        let leftText = scaleGroup.append("text")
            .text(this.minScore.toFixed(2))
            .attr("fill", tickFill)
            .attr("font-family", "sans-serif")
            .attr("font-size", 15)
            .attr("alignment-baseline", "central")
            .attr("transform", `translate(5, ${tickHeight / 2.}) scale(1, -1)`);

        let rightTick = scaleGroup.append("rect")
            .classed("left-tick", true)
            .attr("x", this.chartWidth - tickWidth)
            .attr("y", 0)
            .attr("fill", tickFill)
            .attr("height", tickHeight)
            .attr("width", tickWidth);

        let rightText = scaleGroup.append("text")
            .text(this.maxScore.toFixed(2))
            .attr("fill", tickFill)
            .attr("font-family", "sans-serif")
            .attr("font-size", 15)
            .attr("alignment-baseline", "central")
            .attr("text-anchor", "end")
            .attr("transform", `translate(${this.chartWidth - 5}, ${tickHeight / 2.}) scale(1, -1)`);

        let axisLabel = scaleGroup.append("text")
            .text("SVM Score")
            .attr("fill", tickFill)
            .attr("font-family", "sans-serif")
            .attr("font-size", 10)
            .attr("transform", `translate(0, 25) scale(1, -1)`);

        let xAxis = scaleGroup.append("rect")
            .classed("xAxis", true)
            .attr("x", 0)
            .attr("y", 0)
            .attr("fill", tickFill)
            .attr("height", tickWidth)
            .attr("width", this.chartWidth);

        //Determine the first positive-score bin, which is not always the bin that 0 ends up in.
        let zeroScoreBin = this.binScale(0);
        const positiveBinScore = this.svmBinInfo.positive[zeroScoreBin].score;
        const negativeBinScore = this.svmBinInfo.positive[zeroScoreBin].score;
        const binScore = Math.max(positiveBinScore, negativeBinScore);
        if (binScore < 0){
            //Find next highest key:
            zeroScoreBin++;
            while (!(this.svmBinInfo.positive.hasOwnProperty(zeroScoreBin)) && !(this.svmBinInfo.negative.hasOwnProperty(zeroScoreBin))){
                zeroScoreBin++;
            }
        }
        let zeroXPosition = this.binPositionScale(zeroScoreBin);
        let zeroText = scaleGroup.append("text")
            .text("0")
            .attr("fill", tickFill)
            .attr("font-family", "sans-serif")
            .attr("font-size", 15)
            .attr("alignment-baseline", "central")
            .attr("text-anchor", "middle")
            .attr("transform", `translate(${zeroXPosition - this.leftOfChartMargin + 1}, ${tickHeight / 2.}) scale(1, -1)`);

        const zeroLineBottomOverhang = 20;
        let zeroLineHeight = (this.modelNames.length * this.singleModelResultHeight) + ((this.modelNames.length - 1) * this.interModelResultSpacing) + tickBottomMargin + zeroLineBottomOverhang;
        let zeroLine = scaleGroup.append("rect")
            .classed("zero-line", true)
            .attr("x", zeroXPosition - this.leftOfChartMargin)
            .attr("y", 0)
            .attr("fill", zeroLineFill)
            .attr("height", zeroLineHeight)
            .attr("width", zeroLineWidth)
            .attr("transform", "scale(1,-1)");
    }

    makeSingleResultBar(modelName, modelKey, renderGroup){
        const binnedData = this.binData(this.data, modelKey);

        this.drawSingleResultRow(binnedData.positive, "positive", renderGroup);
        this.drawSingleResultRow(binnedData.negative, "negative", renderGroup);
        this.drawPerformanceSection(modelName, modelKey);
    }

    drawPerformanceSection(modelName, modelPredictionsKey){
        //Determine offset:
        const modelKey = modelPredictionsKey.split('_')[0];
        const modelIndex = this.modelNameMap[modelKey].index;
        let offset = modelIndex * (this.singleModelResultHeight + this.interModelResultSpacing) + this.scaleBoxHeight;
        let modelTextSpace = 0;
        let modelTextYPosition = -45;
        let modelTextSize = 18;
        let axisYPosition = -1;
        let numAxisTicks = 3;
        let metricTextHorizontalSpace = 60;
        let metricTextFontSize = 12;
        let metricTextFontFill = "grey";
        let performanceBarHeightPercentage = .7;
        let performanceMetricsRightMargin = 80;
        let performanceBarFillOne = "steelblue";
        let performanceBarMid = "white";
        let performanceBarFillZero = "white";
        let performanceBarHighlightFill = "orange";
        let valueLabelFontFill = "darkgrey";
        let valueLabelFontSize = 10;

        //Create the bar chart scale
        let maxBarWidth = this.leftOfChartMargin - metricTextHorizontalSpace - performanceMetricsRightMargin;
        let barChartScale = d3.scaleLinear().domain([0, 1]).range([0, maxBarWidth]);

        //Create bar chart color scale
        let barColorScale = d3.scaleLinear().domain([0, .2, 1]).range([performanceBarFillZero, performanceBarMid, performanceBarFillOne]);

        //Create barchart axis
        let barChartAxis = d3.axisTop().scale(barChartScale).ticks(numAxisTicks);

        //Create group for all performance elements
        const textFill = "#4F4F4F";
        let performanceGroup = this.svgContainer.selectAll("g." + modelKey + "Performance").data(["yum"]);
        performanceGroup.exit().remove();
        performanceGroup = performanceGroup.enter().append("g").merge(performanceGroup);
        performanceGroup.attr("transform", `translate(0, ${offset})`);

        //Add model name:
        let modelNameText = performanceGroup.selectAll("text").data([modelName]);
        modelNameText.exit().remove();
        modelNameText = modelNameText.enter().append('text').merge(modelNameText);

        modelNameText.classed(modelKey + "Performance", true)
            .text(modelName)
            .attr("alignment-baseline", "hanging")
            .attr("font-size", modelTextSize)
            .attr("fill", textFill)
            .attr("y", modelTextYPosition);

        //Add performance bar charts
        //Create the appropriate data items for appending groups for each performance metric
        let performanceData = [];
        for (let metricName of Object.keys(this.performanceMetricMap)){
            let index = this.performanceMetricMap[metricName].index;
            let datum = {displayName : this.performanceMetricMap[metricName].displayName,
                         value : this.modelPerformance[modelKey][metricName],
                         metricName};
            performanceData[index] = datum;
        }


        let performanceBarGroupHeight = ((this.maxBarHeight * 2) + this.posNegSpacing - modelTextSpace) / performanceData.length;

        let performanceBarGroups = performanceGroup.selectAll("g.performanceBar" + modelKey).data(performanceData);
        performanceBarGroups.exit().remove();
        performanceBarGroups = performanceBarGroups.enter().append("g").merge(performanceBarGroups);
        performanceBarGroups.classed("performanceBar" + modelKey, true)
            .attr("transform", (d, i)=>{
                let yOffset = (i * performanceBarGroupHeight) + modelTextSpace;
                return `translate(0, ${yOffset})`;
            });

        let performanceBarHeight = performanceBarGroupHeight * performanceBarHeightPercentage;
        let performanceBarRects = performanceBarGroups.selectAll("rect").data((d)=>{
            return [d];
        });
        performanceBarRects.exit().remove();
        performanceBarRects = performanceBarRects.enter().append("rect").merge(performanceBarRects);
        performanceBarRects.attr("y", (d)=>{
            let leftoverSpace = performanceBarGroupHeight - performanceBarHeight;
            return leftoverSpace / 2.;
        })
            .attr("x", metricTextHorizontalSpace)
            .attr("height", performanceBarHeight)
            .attr("width", (d)=>{
                let width = barChartScale(d.value);
                return width;
            })
            .attr("fill", (d)=>{
                let color = barColorScale(d.value);
                return color;
            })
            .each(function(){
                let thisBar = d3.select(this);
                let metricName = thisBar.datum().metricName;
                thisBar.classed(metricName + "BarRect", true);
            })
            .on("mouseover", (d, i)=>{
                let selectionCriteria = "rect." + d.metricName + "BarRect";
                let rects = this.svgContainer.selectAll(selectionCriteria);
                rects.attr("fill", performanceBarHighlightFill);
            })
            .on("mouseout", (d, i)=>{

                let rects = this.svgContainer.selectAll("rect." + d.metricName + "BarRect");
                rects.attr("fill", barColorScale(d.value));
            });

        //Add bar values
        let valueLabels = performanceBarGroups.selectAll("text.valueLabel").data((d)=>{
            return [d.value];
        });
        valueLabels.exit().remove();
        valueLabels = valueLabels.enter().append("text").merge(valueLabels);
        valueLabels.text((d)=>{
            return d.toFixed(3).toString();
        })
            .attr("alignment-baseline", "middle")
            .attr("y", (d)=>{
                return (performanceBarGroupHeight / 2) + 1;
            })
            .attr("x", (d)=>{
                let barWidth = barChartScale(d);
                let position = barWidth + metricTextHorizontalSpace;
                return position + 2;
            })
            .attr("font-size", valueLabelFontSize)
            .attr("fill", valueLabelFontFill)
            .classed("valueLabel", true);

        //Add metric labels
        let metricLabels = performanceBarGroups.selectAll("text.metricName").data((d)=>{
            return [d.displayName];
        });
        metricLabels.exit().remove();
        metricLabels = metricLabels.enter().append("text").merge(metricLabels);
        metricLabels.text(d=>d)
            .attr("alignment-baseline", "middle")
            .attr("text-anchor", "end")
            .attr("y", (d)=>{
                return (performanceBarGroupHeight / 2) + 1;
            })
            .attr("x", metricTextHorizontalSpace - 5)
            .attr("font-size", metricTextFontSize)
            .attr("fill", metricTextFontFill)
            .classed("metricName", true);

        //Add axis group
        let axisGroup = performanceGroup.selectAll("g.axis" + modelKey).data(["hmmm"]);
        axisGroup.exit().remove();
        axisGroup = axisGroup.enter().append("g").merge(axisGroup);
        axisGroup.classed("axis" + modelKey, true)
            .attr("transform", `translate(${metricTextHorizontalSpace}, ${axisYPosition})`)
            .call(barChartAxis);

    }

    drawSingleResultRow(binnedRow, posOrNeg, renderGroup){
        //Compute max bar height and create height scale
        const heights = binnedRow.map((bin)=>{
            return bin.correct.length + bin.incorrect.length;
        });
        const maxHeight = Math.max(...heights);

        const barHeightScale = d3.scaleLog().domain([1, maxHeight]).range([this.barHeightForOneNote, this.maxBarHeight]);

        let posNegOffset = this.singleModelResultHeight;
        if (posOrNeg === "positive"){
            posNegOffset = this.maxBarHeight;
        }

        //Draw histogram bars
        let barGroups = renderGroup.selectAll("g." + posOrNeg).data(binnedRow);
        barGroups.exit().remove();
        barGroups = barGroups.enter().append("g").merge(barGroups);
        barGroups.classed(posOrNeg, true)
            .attr("transform", (d)=>{
            let x = this.binPositionScale(d.bin);
            return `translate(${x}, ${posNegOffset})`
            })
            .on("mouseover", this.tip.show)
            .on("mouseout", this.tip.hide);

        let bars = barGroups.selectAll("rect").data((d)=>{
            let totalNotes = d.correct.length + d.incorrect.length;
            let totalHeight = barHeightScale(totalNotes);
            let fractionCorrect = d.correct.length / totalNotes;
            let correctHeight = totalHeight * fractionCorrect;
            let correctInfo = {correct: true, height: correctHeight, offset: 0};
            let incorrectInfo = {correct: false, height: totalHeight - correctHeight, offset: correctHeight};
            return [correctInfo, incorrectInfo]
        });
        bars.exit().remove();
        bars = bars.enter().append("rect").merge(bars);
        bars.attr("width", (d)=>{
            let barFraction = this.chartWidth / this.defaultNumBins;
            return barFraction;
        })
            .attr("height", (d)=>{
                return d.height;
            })
            .attr("fill", (d)=>{
                if (d.correct){
                    return this.correctFill;
                }
                return this.incorrectFill;
            })
            .attr("x", 0)
            .attr("y", (d)=>{
                return d.offset;
            })
            .attr("transform", `scale(1, -1)`);

        //Draw the scale lines
        const zeroBaselineFill = "#757575";
        const oneNoteHeightFill = "#B2B2B2";
        const zeroLabelFontSize = 10;
        const classLabelFontSize = 10;
        let zeroBaseline = renderGroup.selectAll("rect.zeroBaseline" + posOrNeg).data(["mmmhmmm"]);
        zeroBaseline.exit().remove();
        zeroBaseline = zeroBaseline.enter().append("rect").merge(zeroBaseline);
        zeroBaseline.classed("zeroBaseline" + posOrNeg, true)
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", this.chartWidth)
            .attr("height", 2)
            .attr("fill", zeroBaselineFill)
            .attr("transform", `translate(${this.leftOfChartMargin}, ${posNegOffset})`);

        let yAxis = renderGroup.selectAll("rect.yAxis" + posOrNeg).data(["mmmhmmm"]);
        yAxis.exit().remove();
        yAxis = yAxis.enter().append("rect").merge(yAxis);
        yAxis.classed("yAxis" + posOrNeg, true)
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 2)
            .attr("height", this.maxBarHeight + 3)
            .attr("fill", zeroBaselineFill)
            .attr("transform", `translate(${this.leftOfChartMargin}, ${posNegOffset}) scale(1, -1)`);

        let oneNoteHeightline = renderGroup.selectAll("rect.oneNoteHeightline" + posOrNeg).data(["mmmhmmm"]);
        oneNoteHeightline.exit().remove();
        oneNoteHeightline = oneNoteHeightline.enter().insert("rect", ":first-child").merge(oneNoteHeightline);
        oneNoteHeightline.classed("oneNoteHeightline" + posOrNeg, true)
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", this.chartWidth)
            .attr("height", 1)
            .attr("fill", oneNoteHeightFill)
            .attr("fill-opacity", .5)
            .attr("transform", `translate(${this.leftOfChartMargin}, ${posNegOffset - this.barHeightForOneNote})`);

        let maxNoteHeightline = renderGroup.selectAll("rect.maxNoteHeightline" + posOrNeg).data(["mmmhmmm"]);
        maxNoteHeightline.exit().remove();
        maxNoteHeightline = maxNoteHeightline.enter().insert("rect", ":first-child").merge(maxNoteHeightline);
        maxNoteHeightline.classed("maxNoteHeightline" + posOrNeg, true)
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", this.chartWidth)
            .attr("height", 1)
            .attr("fill", oneNoteHeightFill)
            .attr("fill-opacity", .5)
            .attr("transform", `translate(${this.leftOfChartMargin}, ${posNegOffset - this.maxBarHeight})`);

        let zeroLabel = renderGroup.selectAll("text.zeroLabel" + posOrNeg).data(["mmmhmmm"]);
        zeroLabel.exit().remove();
        zeroLabel = zeroLabel.enter().append("text").merge(zeroLabel);
        zeroLabel.classed("zeroLabel" + posOrNeg, true)
            .text("0")
            .attr("x", 0)
            .attr("y", 0)
            .attr("font-size", zeroLabelFontSize)
            .attr("font-family", "sans-serif")
            .attr("fill", zeroBaselineFill)
            .attr("transform", `translate(${this.leftOfChartMargin - 7}, ${posNegOffset + 10})`);

        let oneLabel = renderGroup.selectAll("text.oneLabel" + posOrNeg).data(["mmmhmmm"]);
        oneLabel.exit().remove();
        oneLabel = oneLabel.enter().append("text").merge(oneLabel);
        oneLabel.classed("oneLabel" + posOrNeg, true)
            .text("1")
            .attr("x", 0)
            .attr("y", 0)
            .attr("font-size", zeroLabelFontSize)
            .attr("font-family", "sans-serif")
            .attr("fill", zeroBaselineFill)
            .attr("transform", `translate(${this.leftOfChartMargin - 7}, ${posNegOffset - this.barHeightForOneNote + 3})`);

        let maxLabel = renderGroup.selectAll("text.maxLabel" + posOrNeg).data(["mmmhmmm"]);
        maxLabel.exit().remove();
        maxLabel = maxLabel.enter().append("text").merge(maxLabel);
        maxLabel.classed("maxLabel" + posOrNeg, true)
            .text(maxHeight.toString())
            .attr("x", 0)
            .attr("y", 0)
            .attr("font-size", zeroLabelFontSize)
            .attr("font-family", "sans-serif")
            .attr("fill", zeroBaselineFill)
            .attr("text-anchor", "end")
            .attr("transform", `translate(${this.leftOfChartMargin - 3}, ${posNegOffset - this.maxBarHeight + 5})`);

        let classLabelText = "Bleeding Positive";
        if (posOrNeg === "negative"){
            classLabelText = "Bleeding Negative"
        }
        let classLabel = renderGroup.selectAll("text.classLabel" + posOrNeg).data(["mmmhmmm"]);
        classLabel.exit().remove();
        classLabel = classLabel.enter().append("text").merge(zeroLabel);
        classLabel.classed("classLabel" + posOrNeg, true)
            .text(classLabelText)
            .attr("x", 0)
            .attr("y", 0)
            .attr("font-size", classLabelFontSize)
            .attr("font-family", "sans-serif")
            .attr("fill", zeroBaselineFill)
            .attr("alignment-baseline", "hanging")
            .attr("transform", `translate(${this.leftOfChartMargin + 15}, ${posNegOffset + 4})`);


    }


    binData(data, modelKey){
        const bins = {positive: {}, negative: {}};
        data.map((datum)=>{
            let binNum = this.binScale(datum.RealSVMScore);
            let name = datum.names;
            let noteClass = "positive";
            if (+datum.gold === 0){
                noteClass = "negative"
            }
            if (!bins[noteClass].hasOwnProperty(binNum)){
                bins[noteClass][binNum] = {correct: [], incorrect: [], score: +datum.RealSVMScore, bin: binNum};
            }
            if (+datum[modelKey] !== +datum.gold){
                bins[noteClass][binNum].incorrect.push(name);
            }
            else {
                bins[noteClass][binNum].correct.push(name);
            }
        });
        //Define smvBinInfo to help position the zero-score line
        if (modelKey.toLowerCase().includes("svm")){
            Object.assign(this.svmBinInfo, bins);
        }
        bins.positive = Object.values(bins.positive);
        bins.negative = Object.values(bins.negative);
        return bins;
    }

    createTableHtml(d){
        const numNotes = d.correct.length + d.incorrect.length;
        const maxLines = 30;
        let html = `<span class='tooltip-details'>Notes: ${numNotes}</span><span class='tooltip-details'>Score: ${d.score.toFixed(2)}</span><table><tr><th><strong style='color:limegreen'>Correct (${d.correct.length}):</strong></th><th><strong style='color:orangered'>Incorrect (${d.incorrect.length}):</strong></th></tr>`;
        let longestLength = Math.max(d.correct.length, d.incorrect.length);

        let lineCount = 0;
        for (let i = 0; i < longestLength; i++){
            let correctNoteName = "";
            if (d.correct.length > i){
                correctNoteName = d.correct[i]
            }
            let incorrectNoteName = "";
            if (d.incorrect.length > i){
                incorrectNoteName = d.incorrect[i]
            }
            //Limit the number of lines to maxLines.
            if (++lineCount > maxLines){
                correctNoteName = correctNoteName !== "" ? "..." : correctNoteName;
                incorrectNoteName = incorrectNoteName !== "" ? "..." : incorrectNoteName;
                html += `<tr><td>${correctNoteName}</td><td>${incorrectNoteName}</td></tr>`;
                break;
            }
            html += `<tr><td>${correctNoteName}</td><td>${incorrectNoteName}</td></tr>`;
        }
        html += "</table>";
        return html;
    }

    computeModelPerformance(results){
        const performance = {};

        results.data.map((result)=>{
            for (let [key, value] of Object.entries(result)){
                let modelName;
                if (key.toLowerCase().includes('prediction')){
                    modelName = key.split('_')[0];
                    if (!(performance.hasOwnProperty(modelName))){
                        performance[modelName] = {truePositives : 0, trueNegatives : 0, falsePositives : 0, falseNegatives : 0, total : 0}
                    }
                    if (+value == 1) {
                        if (+result.gold == 1){
                            performance[modelName].truePositives++;
                        }
                        else {
                            performance[modelName].falsePositives++;
                        }
                    }
                    else {
                        if (+result.gold == 0){
                            performance[modelName].trueNegatives++;
                        }
                        else {
                            performance[modelName].falseNegatives++;
                        }
                    }
                    performance[modelName].total++;
                }


            }
        });

        for (let [key, value] of Object.entries(performance)){
            performance[key].accuracy = (value.truePositives + value.trueNegatives) / value.total;
            performance[key].recall = (value.truePositives) / (value.truePositives + value.falseNegatives);
            performance[key].precision = (value.truePositives) / (value.truePositives + value.falsePositives);
            performance[key].npv = (value.trueNegatives) / (value.trueNegatives + value.falseNegatives);
            performance[key].specificity = (value.trueNegatives) / (value.trueNegatives + value.falsePositives);
            performance[key].fScore = 2 * (performance[key].precision * performance[key].recall) / (performance[key].precision + performance[key].recall);
        }

        return performance;
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