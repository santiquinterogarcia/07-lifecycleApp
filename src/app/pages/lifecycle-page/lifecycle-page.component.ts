import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-lifecycle-page',
  templateUrl: './lifecycle-page.component.html',
  styles: [],
})
export class LifecyclePageComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  nombre: string = '';
  segundos: number = 0;
  timerSubscription!: Subscription;
  constructor() {
    console.log('Constructor');
  }

  /* Inicialice la directiva o el componente después de que Angular primero muestre las propiedades vinculadas a los datos y establezca las propiedades 
  de entrada de la directiva o el componente. */
  /* Llamado una vez, después del primero ngOnChanges(). ngOnInit()todavía se llama incluso cuando ngOnChanges()no lo es (que es el caso cuando no hay 
    entradas vinculadas a la plantilla). */
  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSubscription = interval(1000).subscribe((n) => {
      console.log(n);
      this.segundos = n;
    });
  }

  /* Responda cuando Angular establece o restablece las propiedades de entrada vinculadas a datos. El método recibe un SimpleChangesobjeto de valores de 
  propiedad actuales y anteriores. */
  /* Llamado antes ngOnInit()(si el componente tiene entradas enlazadas) y cada vez que cambian una o más propiedades de entrada enlazadas a datos. */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  /* Detecte y actúe sobre los cambios que Angular no puede o no detectará por sí solo. */
  /* Llamado inmediatamente después ngOnChanges()de cada ejecución de detección de cambios e inmediatamente después ngOnInit()de la primera ejecución. */
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  /* Responda después de que Angular proyecte contenido externo en la vista del componente o en la vista en la que se encuentra una directiva. */
  /* Llamado una vez después de la primera ngDoCheck() */
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  /* Responda después de que Angular verifique el contenido proyectado en la directiva o el componente. */
  /* Llamado después ngAfterContentInit()y cada posterior ngDoCheck(). */
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  /* Responda después de que Angular inicialice las vistas del componente y las vistas secundarias, o la vista que contiene la directiva. */
  /* Llamado una vez después de la primera ngAfterContentChecked(). */
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  /* Responda después de que Angular verifique las vistas del componente y las vistas secundarias, o la vista que contiene la directiva. */
  /* Llamado después de ngAfterViewInit()y cada subsiguiente ngAfterContentChecked(). */
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  /* Limpieza justo antes de que Angular destruya la directiva o el componente. Anule la suscripción de Observables y separe 
  los controladores de eventos para evitar pérdidas de memoria. */
  /* Llamado inmediatamente antes de que Angular destruya la directiva o el componente. */
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
  }

  guardar() {}
}
