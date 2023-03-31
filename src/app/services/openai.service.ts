import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class OpenaiService {

  private apiUrl = 'https://api.openai.com/v1/';
  private APIKEY = environment.OPENAI_API_KEY;

  constructor(private http: HttpClient) { }

  sendMessage(message: string) {
    const data = {
      "model": "text-davinci-003",
      "prompt": message,
      "temperature": 0.5,
      "max_tokens": 2048,
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.APIKEY}`
    };

    return this.http.post(this.apiUrl + 'completions', data, { headers });
  }
}
