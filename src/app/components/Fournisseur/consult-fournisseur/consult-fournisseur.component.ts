import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { Fournisseur } from 'src/app/models/fournisseur';
import { MatDialog } from '@angular/material/dialog';
import { AddEditFournisseurComponent } from '../add-edit-fournisseur/add-edit-fournisseur.component';

@Component({
  selector: 'app-consult-fournisseur',
  templateUrl: './consult-fournisseur.component.html',
  styleUrls: ['./consult-fournisseur.component.scss']
})
export class ConsultFournisseurComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nom', 'contact', 'note', 'qualiteService', 'actions'];
  dataSource = new MatTableDataSource<Fournisseur>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fournisseurService: FournisseurService,private dialog: MatDialog ) {}

  ngOnInit(): void {
    this.loadFournisseurs();
  }

  loadFournisseurs(): void {
    this.fournisseurService.getFournisseurs().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  deleteFournisseur(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce fournisseur ?')) {
      this.fournisseurService.deleteFournisseur(id).subscribe(() => {
        this.loadFournisseurs();
      });
    }
  }
  
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddEditFournisseurComponent, {
      width: '600px',
      data: null 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadFournisseurs(); 
      }
    });
  }
  
}
