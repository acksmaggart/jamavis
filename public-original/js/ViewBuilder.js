/*
* Appends a new div to the body, and passes a reference to that div along with the data to a new instance
* of View().
* */


class ViewBuilder {
    buildViews(dataList, divContainer){
        const viewList = [];
        for (let data of dataList){
            let div = divContainer.append("div")
                .attr("id", data.id)
                .classed("viewContainer", true);
            let view = new View(data, div);
            viewList.push(view)
        }

        return viewList;
    }
}