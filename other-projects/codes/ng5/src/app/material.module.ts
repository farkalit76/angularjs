import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Sort, MatButtonModule, MatTableModule, MatSortModule, MatSort, MatSortable, MatTableDataSource }  from '@angular/material';
import { NgModel } from '@angular/forms/src/directives/ng_model';

@NgModule({
    imports:[MatButtonModule, MatTableModule, MatSortModule ], 
    exports:[MatButtonModule]
  })

export class MaterialModule{}