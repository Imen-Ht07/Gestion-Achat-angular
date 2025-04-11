import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-add-edit-fournisseur',
  templateUrl: './add-edit-fournisseur.component.html',
  styleUrls: ['./add-edit-fournisseur.component.scss']
})
export class AddEditFournisseurComponent {
  fournisseurForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<AddEditFournisseurComponent>,
    private fb: FormBuilder,
    private fournisseurService: FournisseurService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Initialisation du formulaire
    this.fournisseurForm = this.fb.group({
      nom: ['', Validators.required],
      contact: ['', Validators.required],
      qualiteService: [''],
      note: [0, [Validators.min(0), Validators.max(5)]]
    });

    // Si nous sommes en mode édition, on pré-remplie les champs avec les données existantes
    if (data && data.fournisseur) {
      this.isEditMode = true;
      this.fournisseurForm.patchValue(data.fournisseur);
    }
  }

  // Soumission du formulaire
  onSubmit(): void {
    if (this.fournisseurForm.invalid) {
      return;
    }

    if (this.isEditMode) {
      this.updateFournisseur();
    } else {
      this.addFournisseur();
    }
  }

  // Ajouter un fournisseur
  addFournisseur(): void {
    const fournisseur = this.fournisseurForm.value;
    this.fournisseurService.addFournisseur(fournisseur).subscribe(response => {
      this.dialogRef.close(response);
    });
  }

  // Mettre à jour un fournisseur
  updateFournisseur(): void {
    const fournisseur = this.fournisseurForm.value;
    fournisseur.id = this.data.fournisseur.id; // L'ID du fournisseur doit être présent pour la mise à jour
    this.fournisseurService.updateFournisseur(fournisseur).subscribe(response => {
      this.dialogRef.close(response);
    });
  }

  // Annuler et fermer la boîte de dialogue
  onCancel(): void {
    this.dialogRef.close();
  }

  // Changer la note via les étoiles
  rateFournisseur(star: number): void {
    this.fournisseurForm.get('note')?.setValue(star);
  }
}
