import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { FavoriteItem } from 'src/app/models/state/favoriteItem';
import * as AllFavoriteActions from "../../store/actions/favorite-action"


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favorites: FavoriteItem[] = []

  constructor(

    private toastrService: ToastrService, private store: Store<any>

  ) { }

  ngOnInit(): void {
    this.getFavorite();
  }

  removeFromFavorite(jobAdvertisement: JobAdvertisement) {
    this.store.dispatch(new AllFavoriteActions.RemoveFromFavorite(jobAdvertisement))
    this.toastrService.error("Silindi", jobAdvertisement.employer.companyName)
  }

  getFavorite() {
    this.store.select("favoriteReducer").subscribe(state => this.favorites = state)
  }
}




