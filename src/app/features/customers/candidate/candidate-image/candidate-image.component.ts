import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-candidate-image',
  templateUrl: './candidate-image.component.html',
  styleUrls: ['./candidate-image.component.css']
})
export class CandidateImageComponent implements OnInit {

  selectedFile: File = null;
  imageAddForm: FormGroup;

  constructor(private imageService: ImageService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService) { }



  createImageForm() {
    this.imageAddForm = this.formBuilder.group({
      multipartFile: [null, Validators.required],
      userId: [this.getUserId()]
    })
  }

  ngOnInit(): void {
    this.createImageForm();
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);


  }

  uploadImage() {
    if (this.imageAddForm.valid) {

      let formData: any = new FormData();
      formData.append('multipartFile', this.selectedFile);
      formData.append('userId', this.imageAddForm.get('userId').value)

      this.imageService.add(formData, this.getUserId()).subscribe(
        (response: any) => {
          console.log(this.imageAddForm.value);
          this.toastrService.success(response.message, 'image eklendi');
        },
        (responseError) => {
          this.toastrService.error(
            JSON.stringify(responseError.error.data.errors),
            'Doğrulama hatası'
          );
        }
      );
    } else {
      this.toastrService.error('form geçerli değil');
    }
  }

  getUserId(): number {
    let user = JSON.parse(localStorage.getItem("user"))
    let userId = user.data.id
    return userId;
  }

}
