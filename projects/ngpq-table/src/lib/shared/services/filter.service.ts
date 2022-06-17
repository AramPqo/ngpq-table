import { FilterDetail } from '../../models/filter.model';

export class FilterService {
  activeFilter: string | FilterDetail[];

  fiterData(
    data: any[],
    isPure: boolean | undefined,
    filterDetails: FilterDetail[],
  ): any[] {
    if (Array.isArray(this.activeFilter)) {
      (this.activeFilter as FilterDetail[]).forEach(af => {
        data = this.doCategoryFilter(data, af.key, af.value, isPure);
      });
    } else {
      data = this.doUsualFilter(data, filterDetails, isPure);
    }

    return data;
  }

  doCategoryFilter(
    data: any[],
    key: string,
    comparativeValue: string,
    isPure: boolean | undefined,
  ): any[] {
    return data.filter(item =>
      isPure
        ? this.toLowerCase(item[key]) === this.toLowerCase(comparativeValue)
        : this.toLowerCase(item[key]).indexOf(this.toLowerCase(comparativeValue)) !== -1,
    );
  }

  doUsualFilter(data, filterDetails, isPure): any[] {
    const filteredData: any = [];

    data.forEach((item: any) => {
      for (const i in item) {
        if (item[i] && filterDetails.find(fo => fo.key === i)) {
          const inPure =
            this.toLowerCase(this.activeFilter) === this.toLowerCase(item[i]);
          const pure =
            this.toLowerCase(item[i]).indexOf(this.toLowerCase(this.activeFilter)) !== -1;

          if (isPure && inPure) {
            filteredData.push(item);
          } else if (pure) {
            filteredData.push(item);
            return;
          }
        }
      }
    });

    return filteredData;
  }

  toLowerCase(value) {
    return value.toString().toLowerCase();
  }
}
