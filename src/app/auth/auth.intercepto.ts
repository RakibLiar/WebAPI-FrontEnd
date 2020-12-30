import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const authToken = localStorage.getItem('Token');
        if(authToken != null) {
            const clonedRequest = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + authToken)
            });
            return next.handle(clonedRequest).pipe(
                tap((res: any)=>{

                },
                (err: any) => {
                    console.log(err);
                    localStorage.removeItem('Token');
                    this.router.navigateByUrl('user/login');
                })
            )
        }
        else
            return next.handle(req.clone());
    }
}