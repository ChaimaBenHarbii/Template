import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public zones =["Sertissage","Assemblage","Production"];
  public titres=["Agent Hotline","Agent de production","Technicien","Administrateur","Chef de production"];
  public registerForm!:FormGroup;

  constructor(private fb:FormBuilder){ }

  ngOnInit(): void {
    this.registerForm= this.fb.group({
      prénom:[''],
      nom:[''],
      email:[''],
      numérodélephone:[''],
      adresse:[''],
      CIN:[''],
      titre:[''],
      zone:[''],
      datedinscription:[''],
    });

}
}
