import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { RandomElementsListComponent } from './random-elements-list.component';
import { RandomElementsService } from '../random-elements.service';
import { RandomElement } from '../random-element';
import { RandomElementComponent } from '../random-element/random-element.component';
import { FilterListPipe } from '../pipes/filter-list.pipe';
import { HighlightPipe } from '../pipes/highlight.pipe';

const testElements: RandomElement[] = [
    {
        id: 1,
        photo: 'https://picsum.photos/id/1/500/500.jpg',
        text: 'Officia irure mollit commodo non quis.',
    },
    {
        id: 2,
        photo: 'https://picsum.photos/id/2/500/500.jpg',
        text: 'Minim proident esse nisi labore laboris ullamco sit occaecat esse mollit.',
    },
    {
        id: 3,
        photo: 'https://picsum.photos/id/3/500/500.jpg',
        text: 'Aute ea anim aute nulla ea nisi irure labore tempor nostrud.',
    },
];

describe('RandomElementsListComponent', () => {
    let component: RandomElementsListComponent;
    let fixture: ComponentFixture<RandomElementsListComponent>;
    let randomElementsService: RandomElementsService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RandomElementsListComponent, RandomElementComponent, FilterListPipe, HighlightPipe],
            providers: [RandomElementsService],
            imports: [ScrollingModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        randomElementsService = TestBed.get(RandomElementsService);
        spyOn(randomElementsService, 'getElements').and.returnValue(testElements);
        fixture = TestBed.createComponent(RandomElementsListComponent);
        component = fixture.componentInstance;
        component.idFilter = '';
        component.textFilter = '';
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize the randomElements', () => {
        expect(component.randomElements.length).toEqual(testElements.length);
    });

    it('should update the id filter', () => {
        const idInput = fixture.debugElement.nativeElement.querySelector(`input[name='id']`);
        idInput.value = '5';
        idInput.dispatchEvent(new KeyboardEvent('keyup'));
        expect(component.idFilter).toBe('5');
    });

    it('should update the text filter', () => {
        const textInput = fixture.debugElement.nativeElement.querySelector(`input[name='text']`);
        textInput.value = 'officia';
        textInput.dispatchEvent(new KeyboardEvent('keyup'));
        expect(component.textFilter).toBe('officia');
    });
});
