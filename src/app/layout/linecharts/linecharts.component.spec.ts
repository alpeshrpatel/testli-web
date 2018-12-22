import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartsComponent } from './linecharts.component';

describe('LineChartsComponent', () => {
    let component: LineChartsComponent;
    let fixture: ComponentFixture<LineChartsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LineChartsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LineChartsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
