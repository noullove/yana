export enum SideBarItemAction {
  OpenInCurrentTab = 'open',
  OpenInNewTab = 'newtab',
  ToggleExpansion = 'toggle',
}

export interface SettingsObject {
  sidebarNoteItemNameAction: SideBarItemAction,
  sidebarNoteItemBackgroundAction: SideBarItemAction,
  sidebarNoteItemMiddleClickAction: SideBarItemAction,
  sidebarMediaItemNameAction: SideBarItemAction,
  sidebarMediaItemBackgroundAction: SideBarItemAction,
  sidebarMediaItemMiddleClickAction: SideBarItemAction,
  sidebarCollectionItemNameAction: SideBarItemAction,
  sidebarCollectionItemBackgroundAction: SideBarItemAction,
  sidebarCollectionItemMiddleClickAction: SideBarItemAction,
  noteItemSaveDelay: number,
  noteItemMaximumSaveInterval: number,
  autoBackupActive: boolean,
  autoBackupIncludeMedia: boolean,
  autoBackupCount: number,
  autoBackupInterval: number,
  autoBackupLocation: string,
  autoUpdateAppActive: boolean,
  autoUpdateAppBackupActive: boolean,
}