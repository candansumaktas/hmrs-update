import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';

@Component({
  selector: 'app-navi-candidate-info',
  templateUrl: './navi-candidate-info.component.html',
  styleUrls: ['./navi-candidate-info.component.css']
})
export class NaviCandidateInfoComponent implements OnInit {

  candidate:Candidate
  constructor() { }

  ngOnInit(): void {
  }

  signOut(){
    localStorage.clear()
  }
  
  getCandidateInfo():Candidate{
    let value=JSON.parse(localStorage.getItem("candidate"))
    this.candidate=value.data
    return this.candidate;
    }
  }

