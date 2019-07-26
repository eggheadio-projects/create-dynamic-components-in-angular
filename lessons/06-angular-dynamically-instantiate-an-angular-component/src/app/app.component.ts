import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from './people/people.service';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular tabs</h1>
    <ngx-tabs>
      <ngx-tab tabTitle="People List">
        <app-people-list [people]="people"
          (addPerson)="onAddPerson()"></app-people-list>
      </ngx-tab>

    </ngx-tabs>

    <ng-template let-person="data" #personEdit>
      Hi, I'm {{ person?.name }}.
    </ng-template>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('personEdit', { static: true }) personEditTemplate;
  @ViewChild(TabsComponent, { static: true }) tabsComponent: TabsComponent;
  people;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(data => {
      this.people = data;
    });
  }

  onAddPerson() {
    this.tabsComponent.openTab(
      'Dynamic tab',
      this.personEditTemplate,
      this.people[0]
    );
  }
}
