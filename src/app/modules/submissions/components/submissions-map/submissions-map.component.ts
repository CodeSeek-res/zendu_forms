import { Component, OnDestroy, OnInit } from '@angular/core';
import { ELEMENT_DATA, Status, TableElements } from '../submissions-table/submissions-table.component';
import { DataForm, SubmissionsServices } from '../../services/submissions.services';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-submissions-map',
  templateUrl: './submissions-map.component.html',
  styleUrls: ['./submissions-map.component.scss'],
})
export class SubmissionsMapComponent implements OnInit, OnDestroy {
  public center!: google.maps.LatLngLiteral;
  public markers: google.maps.LatLngLiteral[] = [];
  public zoom = 14;

  public cardItem = ELEMENT_DATA;
  public statusEnum = Status;
  public searchValue: DataForm;
  private destroy$ = new Subject();

  constructor(private readonly submissionsServices: SubmissionsServices) {}

  public ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });

    this.cardItem.forEach((item) => {
      if (item.lat && item.lng) {
        this.markers.push({
          lat: item.lat,
          lng: item.lng,
        });

        this.center = {
          lat: item.lat,
          lng: item.lng,
        };
      }
    });

    this.submissionsServices.dataFromForm.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.searchValue = data;
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public setMarker(card: TableElements): void {
    this.center = {
      lat: card.lat,
      lng: card.lng,
    };
  }
}
