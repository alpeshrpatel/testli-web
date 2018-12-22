import { LineChartsModule } from './linecharts.module';

describe('ChartsModule', () => {
    let linechartsModule: LineChartsModule;

    beforeEach(() => {
        linechartsModule = new LineChartsModule();
    });

    it('should create an instance', () => {
        expect(linechartsModule).toBeTruthy();
    });
});
