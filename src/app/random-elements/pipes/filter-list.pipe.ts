import { Pipe, PipeTransform } from "@angular/core";

import { RandomElement } from "../random-element";

@Pipe({
    name: "filterList",
})
export class FilterListPipe implements PipeTransform {
    transform(items: RandomElement[], filter: { id: string; text: string }): any {
        if (!items || !filter) {
            return items;
        }

        let filteredItems = items;

        if (filter.id !== "") {
            filteredItems = filteredItems.filter((item) => item.id.toString() === filter.id);
        }

        if (filter.text !== "") {
            filteredItems = filteredItems.filter((item) => item.text.toLowerCase().includes(filter.text.toLowerCase()));
        }

        return filteredItems;
    }
}
