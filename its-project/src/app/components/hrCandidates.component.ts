import { Component } from '@angular/core';
import { HrCandidateService } from '../services/hrCandidates.service';

@Component({
    selector: 'hrPanel',
    templateUrl: './hrCandidate.component.html',
    providers: [HrCandidateService]
})
export class HrService {
    public HrCandidates: Object;
    constructor(private hrCandidateService: HrCandidateService) {
        this.hrCandidateService.getHrCandidates().subscribe((response) => { this.HrCandidates = response });
    }
}