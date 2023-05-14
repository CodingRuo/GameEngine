// Definiert eine Klasse namens "Settings"
export class Settings {
  // Definiert eine private statische Eigenschaft namens "props", die ein leeres Objekt ist.
  // Dies ist der Platz, wo wir alle Einstellungen speichern.
  static #props = {}

  // Eine statische Methode, um eine Einstellung zu bekommen.
  // Nimmt einen Eigenschaftsnamen als Argument und gibt den Wert der Eigenschaft zurück.
  static get(prop) { return this.#props[prop]; }

  // Eine statische Methode, um eine neue Einstellung hinzuzufügen oder eine bestehende zu aktualisieren.
  // Nimmt einen Eigenschaftsnamen und einen Wert als Argumente.
  static add(prop, value) {
    // Überprüft, ob die Eigenschaft bereits als Eigenschaft der Klasse definiert ist.
    if (!Object.getOwnPropertyDescriptor(this, prop)) {
      // Wenn nicht, definiert sie als Eigenschaft der Klasse mit den angegebenen Getter und Setter.
      // Dies ermöglicht es uns, auf die Eigenschaft wie auf eine normale Klassen-Eigenschaft zuzugreifen.
      Object.defineProperty(this, prop, {
        configurable: true, // Die Eigenschaft kann nachträglich verändert oder gelöscht werden.
        enumerable: true, // Die Eigenschaft erscheint in der Auflistung der Eigenschaften der Klasse.
        get: () => this.#props[prop], // Getter, um den Wert der Eigenschaft zu erhalten.
        set: (val) => { this.#props[prop] = val; }, // Setter, um den Wert der Eigenschaft zu setzen.
      });
    }
    // Setzt den Wert der Eigenschaft, unabhängig davon, ob sie bereits definiert war oder nicht.
    this.#props[prop] = value;
  }

  // Eine statische Methode, um eine Einstellung zu entfernen.
  // Nimmt einen Eigenschaftsnamen als Argument und löscht die entsprechende Eigenschaft.
  static remove(prop) { delete this.#props[prop] }
}
