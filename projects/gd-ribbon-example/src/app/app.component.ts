import { Component         } from '@angular/core';
import { ViewChild         } from '@angular/core';
import { AfterViewInit     } from '@angular/core';

import { GDWindowComponent } from 'gd-window';
import { GDRibbonComponent } from 'gd-ribbon';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls:  ['./app.component.css']
})
export class AppComponent implements AfterViewInit
{
    @ViewChild('myWindow')  window : GDWindowComponent;
    @ViewChild('ribbon')    ribbon : GDRibbonComponent;

    public  SearchCustomID = '';
    public  ActiveUser     = 'Jhon Smith';
    public  Mode           = 'Design';
    public  Action         = 'Add new ...';
    public  Solution       = 'mySolution';
    public  Project        = 'myProject';
    public  CustomID       = '123';

    public ngAfterViewInit(): void
    {
        // disable browser contextmenu
        document.addEventListener( 'contextmenu', (event : any) => event.preventDefault() );   

        this.window.AddClass('gd-ribbon');    
        this.window.IsIconVisible = true;
        this.window.Icon          = './assets/Images/favicon.ico';
        this.window.Title         = 'GD Ribbon';
        this.window.Y =  30;
        this.window.X =  40;
        this.window.W = 964;
        this.window.H = 300;
        this.window.Open();
    }    

    public  onRibbonClick( arg : string )
    {
        switch( arg )
        {
            case 'open-active-btn'              : alert(arg);   break;
            case 'default-settings-btn'         : alert(arg);   break;
            case 'security-rules-btn'           : alert(arg);   break;
            case '3d-btn'                       : alert(arg);   break;

            case 'sync-data-btn'                : alert(arg);   break;
            case 'connect-to-server-btn'        : alert(arg);   break;
            case 'disconnect-from-server-btn'   : alert(arg);   break;
 
            case 'users-btn'                    : alert(arg);   break;
            case 'products-btn'                 : alert(arg);   break;
            case 'rules-btn'                    : alert(arg);   break;
            case 'departments-btn'              : alert(arg);   break;
            case 'signs-btn'                    : alert(arg);   break;
            case 'vendors-btn'                  : alert(arg);   break;
            case 'styles-btn'                   : alert(arg);   break;

            case 'zoom-fit-btn'                 : alert(arg);   break;
            case 'zoom-selected-btn'            : alert(arg);   break;
            case 'zoom-in-btn'                  : alert(arg);   break;
            case 'zoom-out-btn'                 : alert(arg);   break;
            case 'zoom-default-btn'             : alert(arg);   break;
        }
    }
}
