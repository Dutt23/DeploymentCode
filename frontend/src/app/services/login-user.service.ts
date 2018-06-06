import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { LoginUser } from "../loginUser.model";
import { AuthenticationModel } from "../authentication.model"
 
const httpOptions = {
  headers: new HttpHeaders({ "Content-type": "application/json" })
};

@Injectable()
export class LoginUserService {
  api;
  user: LoginUser;
  authenticationModel: AuthenticationModel;

  constructor(private http: HttpClient) { }

  public registerUser(user): Observable<LoginUser> {
    return this.http.post<LoginUser>(
      "http://10.0.5.188:9097/addUser",
      user
    );
  }
  public loginUser(authenticationModel): Observable<AuthenticationModel> {
    return this.http.post<AuthenticationModel>(
      "http://10.0.5.188:9097/api/q1/auth",
      authenticationModel
    );
  }

}