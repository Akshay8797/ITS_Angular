import { Component } from '@angular/core';
import { HrCandidateService } from 'src/app/services/hrCandidates.service';

@Component({
    selector: 'hrPanel',
    templateUrl: './hrCandidate.component.html',
    providers: [HrCandidateService]
})
export class HrComponent {
    public HrCandidates: Object;
    constructor(private hrCandidateService: HrCandidateService) {
        this.hrCandidateService.getHrCandidates().subscribe((response) => { this.HrCandidates = response });
    }
}