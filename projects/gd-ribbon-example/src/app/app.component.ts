import { Component                } from '@angular/core';
import { ViewChild                } from '@angular/core';
import { AfterViewInit            } from '@angular/core';
import { ChangeDetectorRef        } from '@angular/core';

import { SplitterPanels           } from 'gd-common';
import { ISplitter                } from 'gd-common';
import { GDCommonService          } from 'gd-common';

import { GDWindowComponent        } from 'gd-window';
import { GDRibbonComponent        } from 'gd-ribbon';
import { GDCanvasWrapperComponent } from 'gd-canvas-wrapper';
import { GDCanvasWrapperService   } from 'gd-canvas-wrapper';
import { GDContextmenuComponent   } from 'gd-contextmenu';
import { GDPGComponent            } from 'gd-pg';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls:  ['./app.component.css']
})
export class AppComponent implements AfterViewInit
{
    @ViewChild('myWindow')                window                 : GDWindowComponent;
    @ViewChild('help')                    help                   : GDWindowComponent;
    @ViewChild('ribbon')                  ribbon                 : GDRibbonComponent;
    @ViewChild('canvas')                  canvas                 : GDCanvasWrapperComponent;
    @ViewChild('canvasShapeMenu')         canvasShapeMenu        : GDContextmenuComponent;
    @ViewChild('canvasAreaMenu')          canvasAreaMenu         : GDContextmenuComponent;
    @ViewChild('canvasTextMenu')          canvasTextMenu         : GDContextmenuComponent;
    @ViewChild('canvasBlockMenu')         canvasBlockMenu        : GDContextmenuComponent;
    @ViewChild('canvasPolygonMenu')       canvasPolygonMenu      : GDContextmenuComponent;
    @ViewChild('canvasPolygonPointMenu')  canvasPolygonPointMenu : GDContextmenuComponent;
    @ViewChild('canvasCalloutMenu')       canvasCalloutMenu      : GDContextmenuComponent;
    @ViewChild('canvasRefMenu')           canvasRefMenu          : GDContextmenuComponent;
    @ViewChild('canvasPolylineMenu')      canvasPolylineMenu     : GDContextmenuComponent;
    @ViewChild('canvasPolylineSegMenu')   canvasPolylineSegMenu  : GDContextmenuComponent;
    @ViewChild('canvasPolylinePointMenu') canvasPolylinePointMenu: GDContextmenuComponent;
    @ViewChild('canvasGondolaMenu')       canvasGondolaMenu      : GDContextmenuComponent;
    @ViewChild('canvasSegMenu')           canvasSegMenu          : GDContextmenuComponent;
    @ViewChild('canvasDimMenu')           canvasDimMenu          : GDContextmenuComponent;
    @ViewChild('canvasArcMenu')           canvasArcMenu          : GDContextmenuComponent;
    @ViewChild('canvasDrawingMenu')       canvasDrawingMenu      : GDContextmenuComponent;
    @ViewChild('canvasPGWindow')          canvasPGWindow         : GDWindowComponent;
    @ViewChild('canvasPGShape')           canvasPGShape          : GDPGComponent;
    @ViewChild('canvasPGSeg')             canvasPGSeg            : GDPGComponent;
    @ViewChild('canvasPGDim')             canvasPGDim            : GDPGComponent;
    @ViewChild('canvasPGArc')             canvasPGArc            : GDPGComponent;
    @ViewChild('canvasPGBlock')           canvasPGBlock          : GDPGComponent;
    @ViewChild('canvasPGRef')             canvasPGRef            : GDPGComponent;
    @ViewChild('canvasPGText')            canvasPGText           : GDPGComponent;
    @ViewChild('canvasPGPolyline')        canvasPGPolyline       : GDPGComponent;
    @ViewChild('canvasPGCallout')         canvasPGCallout        : GDPGComponent;
    @ViewChild('canvasPGArea')            canvasPGArea           : GDPGComponent;
    @ViewChild('canvasPGGondola')         canvasPGGondola        : GDPGComponent;
    @ViewChild('canvasPGDrawing')         canvasPGDrawing        : GDPGComponent;

    @ViewChild('canvasWarningRecursion')      canvasWarningRecursion      : GDWindowComponent;
    @ViewChild('canvasWarningNotImplemented') canvasWarningNotImplemented : GDWindowComponent;
    @ViewChild('canvasDeleteConfirm')         canvasDeleteConfirm         : GDWindowComponent;    

    public  SearchCustomID = '';
    public  ActiveUser     = 'Jhon Smith';
    public  Mode           = 'Design';
    public  Action         = 'Add new ...';
    public  Solution       = 'mySolution';
    public  Project        = 'myProject';
    public  CustomID       = '123';

    public  splitterRibbon : ISplitter;

    public  constructor( private cdRef : ChangeDetectorRef,private service : GDCommonService, private service1 : GDCanvasWrapperService )
    {
    }

    public ngAfterViewInit(): void
    {
        // disable browser contextmenu
        document.addEventListener( 'contextmenu', (event : any) => event.preventDefault() );   

        window.addEventListener( 'beforeunload', (e) => { 
            //e.preventDefault(); 
            //e.returnValue = ''; 
            this.service.onBeforeBrowserClose();
        });

        this.getRoot();

        this.splitterRibbon = 
        {
            buttonSize : 0, 
            panels :
            [
                {
                    layout             : SplitterPanels.top, 
                    isOpened           : true,
                    isButtonVisible    : false,
                    isSeperatorVisible : true,
                    isSeperatorLocked  : true,
                    seperatorThickness : 1,
                    size               : 116 
                }
            ]    
        };

        this.help.OK              = 'Yes';
        this.help.Cancel          = 'No';
        this.help.IsIconVisible   = true;
        this.help.Icon            = './assets/Images/favicon.ico';
        this.help.Title           = 'Canvas features ...';
        this.help.IsFooterVisible = false;
        this.help.Y =   40;
        this.help.X = 1260;
        this.help.W =  440;
        this.help.H =  380;
        this.help.Open();

        this.window.AddClass('gd-ribbon');    
        this.window.IsIconVisible = true;
        this.window.Icon          = './assets/Images/favicon.ico';
        this.window.Title         = 'GD Ribbon';
        this.window.Y =  40;
        this.window.X =  40;
        this.window.W = 968;
        this.window.H = 740;
        this.window.Open();

        this.ribbon.ParentID            = 'gd_window_' + this.window.ID;
        this.canvas.ParentID            = 'gd_window_' + this.window.ID;
        this.canvas.menuShape           = this.canvasShapeMenu;
        this.canvas.menuArea            = this.canvasAreaMenu;
        this.canvas.menuGondola         = this.canvasGondolaMenu;
        this.canvas.menuPolyline        = this.canvasPolylineMenu;
        this.canvas.menuPolylinePoint   = this.canvasPolylinePointMenu;
        this.canvas.menuPolylineSeg     = this.canvasPolylineSegMenu;
        this.canvas.menuCallout         = this.canvasCalloutMenu;
        this.canvas.menuText            = this.canvasTextMenu;
        this.canvas.menuBlock           = this.canvasBlockMenu;
        this.canvas.menuPolygon         = this.canvasPolygonMenu;
        this.canvas.menuRef             = this.canvasRefMenu;
        this.canvas.menuArc             = this.canvasArcMenu;
        this.canvas.menuSeg             = this.canvasSegMenu;
        this.canvas.menuDim             = this.canvasDimMenu;
        this.canvas.menuDrawing         = this.canvasDrawingMenu;
        this.canvas.pgWindow            = this.canvasPGWindow;

        this.canvas.warningRecursion      = this.canvasWarningRecursion;
        this.canvas.warningNotImplemented = this.canvasWarningNotImplemented;
        this.canvas.deleteConfirm         = this.canvasDeleteConfirm;    
    }    

    public  ngAfterViewChecked() 
    {
        this.cdRef.detectChanges();
    }

    private getRoot()
    {
        this.service1.getRoot().subscribe(
            shapes => this.OnLoadComplated_GetRoot( shapes ),
            error  => this.OnRequestError         ( error  )
        );
    }

    private OnLoadComplated_GetRoot( model : Root )
    {
        this.canvas.containerChildWidth  = model.areaChildWidth;
        this.canvas.containerChildHeight = model.areaChildHeight;

//        this.setCookie( 'rootInfo', { 'root': root }, null );        
    }

    private OnRequestError( error : any )
    {
        alert( error );
    }

    //#region CONTEXT MENU
    public  onShapeMenuItemClick( item : string )
    {
        switch( item )
        {
            case 'Edit'   :  this.canvas.OpenShapePG();          break;
            case 'Copy'   :  this.canvas.onNotImplemented(null); break;
            case 'Delete' :  this.canvas.onDeleteConfirm(null);  break;
        }
    }     

    public  onPolygonMenuItemClick( item : string )
    {
        switch( item )
        {
            case 'Edit'   :  this.canvas.OpenPolygonPG();        break;
            case 'Copy'   :  this.canvas.onNotImplemented(null); break;
            case 'Delete' :  this.canvas.onDeleteConfirm(null);  break;
        }
    }   

    public  onAreaMenuItemClick( item : string )
    {
        switch( item )
        {
            case 'Edit'   :  this.canvas.OpenAreaPG();           break;
            case 'Copy'   :  this.canvas.onNotImplemented(null); break;
            case 'Delete' :  this.canvas.onDeleteConfirm(null);  break;
        }
    }     

    public  onSegMenuItemClick( item : string )
    {
        switch( item )
        {
            case 'Edit'   :  this.canvas.OpenSegPG();            break;
            case 'Copy'   :  this.canvas.onNotImplemented(null); break;
            case 'Delete' :  this.canvas.onDeleteConfirm(null);  break;
        }
    }     

    public  onDimMenuItemClick( item : string )
    {
        switch( item )
        {
            case 'Edit'   :  this.canvas.OpenDimPG();            break;
            case 'Copy'   :  this.canvas.onNotImplemented(null); break;
            case 'Delete' :  this.canvas.onDeleteConfirm(null);  break;
        }
    }     

    public  onArcMenuItemClick( item : string )
    {
        switch( item )
        {
            case 'Edit'   :  this.canvas.OpenArcPG();            break;
            case 'Copy'   :  this.canvas.onNotImplemented(null); break;
            case 'Delete' :  this.canvas.onDeleteConfirm(null);  break;
        }
    }     

    public  onTextMenuItemClick( item : string )
    {
        switch( item )
        {
            case 'Edit'   :  this.canvas.OpenTextPG();           break;
            case 'Copy'   :  this.canvas.onNotImplemented(null); break;
            case 'Delete' :  this.canvas.onDeleteConfirm(null);  break;
        }
    }     

    public  onPolylineMenuItemClick( item : string )
    {
        switch( item )
        {
            case 'Edit'      :  this.canvas.OpenPolylinePG();                   break;
            case 'Copy'      :  this.canvas.onNotImplemented(null);             break;
            case 'Delete'    :  this.canvas.onDeleteConfirm(null);              break;
            case 'Line'      :  this.canvas.onSetPolylineSegmentShape('line');  break;
            case 'Arc'       :  this.canvas.onSetPolylineSegmentShape('arc');   break;
            case 'Add Point' :  this.canvas.addPolylinePoint();                 break;
        }
    }     

    public  onPolylinePointMenuItemClick( item : string )
    {
        switch( item )
        {
            case 'Delete' :  this.canvas.deletePolylinePoint();  break;
        }
    }     

    public  onRefMenuItemClick( item : string )
    {
        switch( item )
        {
            case 'Edit'   :  this.canvas.OpenRefPG();            break;
            case 'Copy'   :  this.canvas.onNotImplemented(null); break;
            case 'Delete' :  this.canvas.onDeleteConfirm(null);  break;
        }
    }     

    public  onCalloutMenuItemClick( item : string )
    {
        switch( item )
        {
            case 'Edit'   :  this.canvas.OpenCalloutPG();        break;
            case 'Copy'   :  this.canvas.onNotImplemented(null); break;
            case 'Delete' :  this.canvas.onDeleteConfirm(null);  break;
        }
    }     

    public  onPolygonPointMenuItemClick( item : string )
    {
        switch( item )
        {
            case 'Add'    :  this.canvas.onNotImplemented(null); break;
            case 'Delete' :  this.canvas.onDeleteConfirm(null);  break;
        }
    }     

    public  onBlockMenuItemClick( item : string )
    {
        switch( item )
        {
            case 'Delete' :  this.canvas.onDeleteConfirm(null);  break;
        }
    }     

    public  onDrawingMenuItemClick( item : string )
    {
        switch( item )
        {
            case 'Edit'  :  this.canvas.OpenDrawingPG();         break;
            case 'Paste' :  this.canvas.onNotImplemented(null);  break;
        }
    }     
    //#endregion

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

class Root
{
    id                  : number;
    folder              : string;
    folderID            : number;
    store               : string;
    storeID             : number;
    solution            : string;
    solutionID          : number;
    project             : string;
    projectID           : number;
    prjFixture          : string;
    prjFixtureID        : number;
    property            : string;
    propertyID          : number;
    fixture             : string;
    fixtureID           : number;
    activeStoreID	    : string;
    activeStoreName	    : string;
    activeStorePath	    : string;
    activeSolutionID    : string;
    activeSolutionName  : string;
    activeProjectID	    : string;
    activeProjectName	: string;
    areaChildWidth   	: number;
    areaChildHeight		: number;
}