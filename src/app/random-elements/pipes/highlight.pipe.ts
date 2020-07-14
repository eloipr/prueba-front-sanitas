import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "highlight",
})
export class HighlightPipe implements PipeTransform {
    transform(value: string, searchText: string): any {
        if (!searchText) {
            return value;
        }

        const re = new RegExp(searchText, "gi");
        const match = value.match(re);

        if (!match) {
            return value;
        }

        const result = value.replace(re, (substring) => "<mark>" + substring + "</mark>");
        return result;
    }
}
