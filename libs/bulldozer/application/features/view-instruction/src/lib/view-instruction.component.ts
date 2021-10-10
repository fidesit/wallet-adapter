import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { WalletStore } from '@danmt/wallet-adapter-angular';
import {
  InstructionStore,
  TabsStore,
} from '@heavy-duty/bulldozer/application/data-access';
import { DarkThemeService } from '@heavy-duty/bulldozer/application/ui/dark-theme';
import {
  InstructionAccount,
  InstructionArgument,
} from '@heavy-duty/bulldozer/data-access';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'bd-view-instruction',
  template: `
    <div class="flex w-full">
      <div class="p-4 w-1/2 bd-custom-height-layout overflow-auto">
        <header bdPageHeader *ngIf="instruction$ | ngrxPush as instruction">
          <h1>
            {{ instruction.data.name }}
            <button
              mat-icon-button
              color="primary"
              aria-label="Reload instruction"
              (click)="onReload()"
            >
              <mat-icon>refresh</mat-icon>
            </button>
          </h1>
          <p>Visualize all the details about this instruction.</p>
        </header>

        <bd-instruction-menu
          [connected]="connected$ | ngrxPush"
          (createArgument)="onCreateArgument()"
          (createBasicAccount)="onCreateBasicAccount()"
          (createSignerAccount)="onCreateSignerAccount()"
          (createProgramAccount)="onCreateProgramAccount()"
        >
        </bd-instruction-menu>

        <main>
          <bd-list-arguments
            class="block mb-4"
            [connected]="connected$ | ngrxPush"
            [arguments]="arguments$ | ngrxPush"
            (updateArgument)="onUpdateArgument($event)"
            (deleteArgument)="onDeleteArgument($event)"
          ></bd-list-arguments>

          <bd-list-accounts
            class="block mb-16"
            [connected]="connected$ | ngrxPush"
            [accounts]="accounts$ | ngrxPush"
            (updateBasicAccount)="onUpdateBasicAccount($event)"
            (updateSignerAccount)="onUpdateSignerAccount($event)"
            (updateProgramAccount)="onUpdateProgramAccount($event)"
            (deleteAccount)="onDeleteAccount($event)"
          >
          </bd-list-accounts>
        </main>
      </div>
      <div class="w-1/2 ">
        <div class="bd-custom-height-layout overflow-hidden">
          <bd-code-editor
            [customClass]="'bd-border-bottom bd-custom-monaco-editor-splited'"
            [template]="rustContextCodeInstruction$ | ngrxPush"
            [options]="contextEditorOptions$ | ngrxPush"
          ></bd-code-editor>
          <bd-code-editor
            [customClass]="'bd-custom-monaco-editor-splited'"
            [template]="rustHandlerCodeInstruction$ | ngrxPush"
            [options]="handlerEditorOptions$ | ngrxPush"
          ></bd-code-editor>
        </div>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewInstructionComponent implements OnInit {
  @HostBinding('class') class = 'block';
  readonly connected$ = this._walletStore.connected$;
  readonly instruction$ = this._tabsStore.tab$;
  readonly arguments$ = this._instructionStore.arguments$;
  readonly rustContextCodeInstruction$ = this._instructionStore.rustCode$.pipe(
    map((templates) => templates && templates.context)
  );
  readonly rustHandlerCodeInstruction$ = this._instructionStore.rustCode$.pipe(
    map((templates) => templates && templates.handler)
  );
  readonly commonEditorOptions = {
    language: 'rust',
    automaticLayout: true,
    fontSize: 16,
    wordWrap: true,
  };
  readonly contextEditorOptions$ = this._themeService.isDarkThemeEnabled$.pipe(
    map((isDarkThemeEnabled) => ({
      ...this.commonEditorOptions,
      theme: isDarkThemeEnabled ? 'vs-dark' : 'vs-light',
      readOnly: true,
    }))
  );
  readonly handlerEditorOptions$ = this._themeService.isDarkThemeEnabled$.pipe(
    map((isDarkThemeEnabled) => ({
      ...this.commonEditorOptions,
      theme: isDarkThemeEnabled ? 'vs-dark' : 'vs-light',
      readOnly: false,
    }))
  );
  readonly accounts$ = this._instructionStore.accounts$;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _tabsStore: TabsStore,
    private readonly _walletStore: WalletStore,
    private readonly _instructionStore: InstructionStore,
    private readonly _themeService: DarkThemeService
  ) {}

  ngOnInit() {
    this._instructionStore.selectInstruction(
      this._router.events.pipe(
        filter(
          (event): event is NavigationStart => event instanceof NavigationStart
        ),
        map((event) => {
          const urlAsArray = event.url.split('/').filter((segment) => segment);

          if (urlAsArray.length !== 4 || urlAsArray[2] !== 'instructions') {
            return null;
          } else {
            return urlAsArray[3];
          }
        }),
        startWith(this._route.snapshot.paramMap.get('instructionId') || null)
      )
    );
  }

  onReload() {
    this._instructionStore.reload();
  }

  onCreateArgument() {
    this._instructionStore.createArgument();
  }

  onUpdateArgument(argument: InstructionArgument) {
    this._instructionStore.updateArgument(argument);
  }

  onDeleteArgument(argumentId: string) {
    this._instructionStore.deleteArgument(argumentId);
  }

  onCreateBasicAccount() {
    this._instructionStore.createBasicAccount();
  }

  onUpdateBasicAccount(account: InstructionAccount) {
    this._instructionStore.updateBasicAccount(account);
  }

  onCreateSignerAccount() {
    this._instructionStore.createSignerAccount();
  }

  onUpdateSignerAccount(account: InstructionAccount) {
    this._instructionStore.updateSignerAccount(account);
  }

  onCreateProgramAccount() {
    this._instructionStore.createProgramAccount();
  }

  onUpdateProgramAccount(account: InstructionAccount) {
    this._instructionStore.updateProgramAccount(account);
  }

  onDeleteAccount(accountId: string) {
    this._instructionStore.deleteAccount(accountId);
  }
}
