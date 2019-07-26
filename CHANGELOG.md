# Changelog

All notable changes to "Create Dynamic Components in Angular” will be documented in this file.

## 1.0.0

### Added

- Added this file.
- Added individual lessons as folders to be included under the master branch.
- Added support for yarn.

### Changed

- Update `angular#6.0.2->7.2.9`.
- Update `rxjs#6.1.0->6.4.0`.
- Update `typescript#2.8.3->3.1.1`.
- No major breaking changes from updates.

### Removed

## 1.1.0 - 7/26/2019

### Added

- This changelog update.

### Changed

- Update `angular#7.2.9->8.1.3`.
- Update `rxjs#6.4.0->6.5.2`.
- Update `typescript#3.1.1->3.4.2`.
- Changed imports in `polyfills.ts` from `import 'core-js/es7/reflect'` -> `import 'core-js/proposals/reflect-metadata';` because es7 path removed in core-js update 3.0.0+. Code works without import as well, but chose to include `reflect-metadata` import anyways, as it is an alternative.
- Changed names of lesson folders and their packages to match course more accurately (increased each by 1).

### Removed

- Removed `@angular/http#7.2.5` by default due to Angular 8 update expecting new preferred service `httpClient`.
