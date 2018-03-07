let cursorX;
let cursorY;

document.addEventListener("DOMContentLoaded", function(event) {

    //Track cursor for tooltip positioning;
    document.onmousemove = function(e){
        cursorX = e.clientX;
        cursorY = e.clientY;
    };

    d3.tsv("/public/data/TestwithSVM.csv", (testData)=>{
        d3.tsv("/public/data/TestDSwithSVM.csv", (testDSData)=>{
            d3.tsv("/public/data/TrainwithSVM.csv", (trainData)=>{
                d3.tsv("/public/data/TrainDSwithSVM.csv", (trainDSData)=>{
                    const dataList = [
                        {data: trainData,
                         name: "Training Results",
                        id: "trainDiv"},
                        {data: trainDSData,
                            name: "Training Results - DS",
                            id: "trainDSDiv"},
                        {data: testData,
                            name: "Test Results",
                            id: "testDiv"},
                        {data: testDSData,
                            name: "Test Results - DS",
                            id: "testDSDiv"}
                    ];
                    createViews(dataList)
                })
            })
        })
    })
});

function createViews(dataList){
    const viewBuilder = new ViewBuilder();
    const viewsContainer = d3.select("#viewsContainer");
    viewBuilder.buildViews(dataList, viewsContainer);
}
