var newBuild = {
"/pa/units/orbital/orbital_carrier/orbital_carrier.json": ["orbital", 0,{ row: 0, column: 3, titans: true }],

}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
_.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}