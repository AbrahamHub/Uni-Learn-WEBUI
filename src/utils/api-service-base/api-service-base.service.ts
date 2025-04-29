import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceBaseService {
  private baseUrl = '';

  constructor(private HttpClient: HttpClient) {}

  protected put<T>(endpoint: string, body: Partial<T>): Observable<T> {
    return this.HttpClient.put<T>(`${this.baseUrl}/${endpoint}`, body).pipe(
      catchError(this.errorHandler.bind(this)),
    );
  }

  protected get<T>(endpoint: string, params?: HttpParams) {
    return this.HttpClient.get<T>(`${this.baseUrl}/${endpoint}`, {
      params,
    }).pipe(catchError(this.errorHandler.bind(this)));
  }

  protected post<T>(endpoint: string, body?: Partial<T>): Observable<T> {
    return this.HttpClient.post<T>(`${this.baseUrl}/${endpoint}`, body).pipe(
      catchError(this.errorHandler.bind(this)),
    );
  }

  protected delete(endpoint: string, id: number) {
    return this.HttpClient.delete(`${this.baseUrl}/${endpoint}/${id}`).pipe(
      catchError(this.errorHandler.bind(this)),
    );
  }

  private errorHandler(error: any) {
    console.log(error);
    return throwError(() => error);
  }
}
