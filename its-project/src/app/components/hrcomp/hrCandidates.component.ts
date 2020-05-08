import { Component } from '@angular/core';
import { HrCandidatesService } from 'src/app/services/hrCandidates.service';

@Component({
    selector: 'hrPanel',
    templateUrl: './hrCandidates.component.html',
    styleUrls: ['./hrCandidates.component.css'],
    providers: [HrCandidatesService]
})
export class HrComponent {
    public HrCandidates: Object;
    constructor(private hrCandidateService: HrCandidatesService) {
        this.hrCandidateService.getHrCandidates().subscribe((response) => { this.HrCandidates = response });
    }
}