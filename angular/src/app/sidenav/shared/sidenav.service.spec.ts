import { TestBed, inject } from '@angular/core/testing';

import { SidenavService } from './sidenav.service';
import { BookingInMemoryService } from '../../shared/backend/booking/booking-in-memory.service';
import { BookingDataService } from '../../shared/backend/booking/booking-data-service';
import { SnackBarService } from '../../shared/snackService/snackService.service';
import { CovalentModule } from '../../shared/covalent.module';

describe('SidenavSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SidenavService,
        SnackBarService,
        {provide: BookingDataService, useClass: BookingInMemoryService}],
      imports: [
        CovalentModule,
      ],
    });
  });

  it('should ...', inject([SidenavService], (service: SidenavService) => {
    expect(service).toBeTruthy();
  }));
});
