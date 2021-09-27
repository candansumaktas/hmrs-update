import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement/job-advertisement.service';
import { Store } from '@ngrx/store';
import * as AllFavoriteActions from "../../store/actions/favorite-action";
import { FavoriteItem } from 'src/app/models/state/favoriteItem';
import { FavoriteService } from 'src/app/services/favorite/favorite.service';
import { Favorites } from 'src/app/models/favorite/favorites';

@Component({
  selector: 'app-job-advertisement-list',
  templateUrl: './job-advertisement-list.component.html',
  styleUrls: ['./job-advertisement-list.component.css']
})
export class JobAdvertisementListComponent implements OnInit {

  jobAdvertisements: JobAdvertisement[] = []
  page: number = 1;
  itemsPerPage: number = 10;
  filterText: String = "";
  favoriteItem: FavoriteItem

  constructor(private jobAdvertisementService: JobAdvertisementService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<any>,
    private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getActiveJobAdvertisementsByEmployer(params["employerId"])
    })
    this.getActiveJobAdvertisement();
  }

  getActiveJobAdvertisement() {
    this.jobAdvertisementService.getActiveJobAdvertisements().subscribe((data: any) => {
      this.jobAdvertisements = data.data;
      console.log(data.data)

    })
  }

  changeStatus(jobAdvertisement: JobAdvertisement) {

    this.jobAdvertisementService.closeJobAdvertisement(jobAdvertisement).subscribe((data: any) => {
      this.jobAdvertisements = data.data
      this.toastrService.success("İlan pasif hale getirildi")
      console.log(this.jobAdvertisements)
    })
  }


  SortByCreatedDate() {
    this.jobAdvertisementService.getActiveJobAdvertisementsByDate(1).subscribe((data: any) => {
      this.jobAdvertisements = data.data
      console.log(this.jobAdvertisements)
    })

  }

  getActiveJobAdvertisementsByEmployer(employerId: number) {
    return this.jobAdvertisementService.getActiveJobAdvertisementsByCompany(employerId).subscribe((data: any) => {
      this.jobAdvertisements = data.data
      console.log(data.data);


    });
  }

  checkUser(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }

  checkEmployer(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let value = user.message;
      if (value.includes("employer")) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  changeVerificationToUnverified(jobAdvertisement: JobAdvertisement) {
    this.jobAdvertisementService.makeUnverified(jobAdvertisement).subscribe((response: any) => {
      this.toastrService.success("Verification changed successfully.")

    })
  }

  addToFavorite(jobAdvertisement: JobAdvertisement) {

    this.store.dispatch(new AllFavoriteActions.AddToFavorite(jobAdvertisement))
    this.toastrService.success('Favorilere başarıyla eklediniz.')
  }

}


