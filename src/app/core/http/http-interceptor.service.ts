import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, tap } from "rxjs/operators";

import { SpinnerService } from "src/app/pages/shared/spinner/spinner.service";


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private spinnerService: SpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.spinnerService.show();
        return next.handle(req).pipe(
            finalize(() => this.spinnerService.hide())
        );
    }
}