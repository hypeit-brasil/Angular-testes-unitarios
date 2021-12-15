import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TodoComponent } from './todo.component';


describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Devo conseguir buscar o texto no componente', () => {
    component.todo = { ...component.todo, title: 'novo titulo' };
    fixture.detectChanges();
    const elementTitle = fixture.debugElement.query(By.css('#title'));
    expect((elementTitle.nativeElement as HTMLSpanElement).textContent).toContain('novo titulo')
  })
});
