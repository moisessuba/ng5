import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

	private goals = new BehaviorSubject<any> (['The unitial goal', 'Another silly life goal']);
	goal = this.goals.asObservable();

	changeGoal(goal){
		this.goals.next(goal);
	}

  constructor() { }

}
