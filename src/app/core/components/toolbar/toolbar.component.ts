import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styles: [`:host {
    background-color: #106cc8;
    color: rgba(255, 255, 255, 0.87);
    display: block;
    height: 48px;
    padding: 0 16px;
  }

  h1 {
    display: inline;
    font-size: 20px;
    font-weight: normal;
    letter-spacing: 0.1px;
    line-height: 48px;
  }

  .more {
    background: url("https://lh3.googleusercontent.com/fife/ABSRlIo4kNRuRGaSk4BhravpGGnF2UTZmFvIKIs_rvFcvNC2YWAVP7Mvg--NfB4ORPi1b-5v2fB0yKzRXs4K4o9vCe9xTihRQHghHV8hE3f8TSrntaGo0ZfUPaXj-utX_Jb6rlfw60wowH4bPwRjGyoMWJiiFtGidepOGTW_PYEyx8d4EIA7bN0rmGNwnXgZ0G0ZUNhlzcfqKh8GNcjycSmYUnss7qivi-k-yj7jK96h7iRnpPTjOYUZeleBaFE0bMsslmbtXGQURw61SLwaF95qY8uNbuRNpZzIbU3JLvi7Pca6fF06JaH8kR6d-6gKsAJGIHJODP9Qj8oeRs4eE-CsHKKZEewpvmly7Hw8gGJsqgvwfTOmEJd2QIwSvyJ-Gl-oFwZmX5xvY5HFBP_BA_o6IcE9eciqxSPF2d3OzKJS4NmzhP6uo3hBoke_3xgwK8vbNpxsEUwG2FNFwij7DfYDuqYnn-QBPUyge4U54_BmG6p1hDHblALBlFInWYyjH2mXrzedEAc6RiZgHoRjUbyCWdkNEy5yBRKtrBJdMFpeii4Z8tjIRNBf-3uz3QE82EzbXWAgKV2UP71bH1p8aA1hICcnr-KpO22wTr3MFuEL6tgFCOhysmBmZ0bm3tdfY4GyLTi8txQEZlD5It_tAWAEzrtpXSY2mxrtsem7njV_NK1MqxRXYOgjDip3v6PoS7fRlegoazVcLhB_QKrrpR6mwyCJ6RCvHY4nPufxoKXpzgOlaZo=s32-c");
    float: right;
    height: 24px;
    margin-top: 12px;
    border-radius: 50%;
    width: 24px;
  }`]
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
