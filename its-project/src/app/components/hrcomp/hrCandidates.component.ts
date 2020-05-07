import { Component } from '@angular/core';
import { HrCandidateService } from 'src/app/services/hrCandidates.service';

@Component({
    selector: 'hrPanel',
    templateUrl: './hrCandidates.component.html',
    styleUrls: ['./hrCandidates.component.css'],
    providers: [HrCandidateService]
})
export class HrComponent {
    public HrCandidates: Object;
    constructor(private hrCandidateService: HrCandidateService) {
        this.hrCandidateService.getHrCandidates().subscribe((response) => { this.HrCandidates = response });
    }
}