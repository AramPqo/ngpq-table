import { CategoryFilterComponent } from "./category-filter/category-filter.component";
import { FilterComponent } from "./filter.component";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { UsualFilterComponent } from "./usual-filter/usual-filter.component";

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        FilterComponent,
        UsualFilterComponent,
        CategoryFilterComponent
    ],
    exports: [
        FilterComponent,
        UsualFilterComponent,
        CategoryFilterComponent
    ],
    entryComponents: [
        UsualFilterComponent,
        CategoryFilterComponent
    ]
})
export class FilterModule {

}