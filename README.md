# Quick Dutch Tools

Handige snippets voor Nederlandse developers. Voeg met één command veelgebruikte NL-specifieke helpers toe aan je code — BSN-, IBAN- en postcodevalidatie, BTW-berekening, en netjes geformatteerde datums en bedragen.

## Features

Open het command palette (`Ctrl+Shift+P` / `Cmd+Shift+P`), typ **"Quick Dutch"** en kies **Insert Quick Dutch Snippet**. Selecteer een snippet en deze wordt op je cursorpositie ingevoegd.

Beschikbare snippets:

| Snippet | Wat het doet |
| --- | --- |
| **BSN validatie (elfproef)** | Valideert een burgerservicenummer met de officiële elfproef |
| **Postcode validatie** | Valideert een NL-postcode (`1234 AB`), inclusief uitsluiting van ongeldige combinaties |
| **IBAN validatie** | Valideert een IBAN met de mod-97 controle |
| **Datum formatteren (nl-NL)** | Formatteert een datum als `7 juli 2026` |
| **Valuta formatteren (EUR)** | Formatteert een bedrag als `€ 1.234,56` |
| **Telefoonnummer validatie** | Valideert een NL-telefoonnummer (`06...` / `+31...`) |
| **BTW berekenen** | Berekent BTW (21%) over een bedrag exclusief BTW |

Alle snippets zijn framework-onafhankelijke TypeScript/JavaScript-functies die je direct kunt gebruiken of aanpassen.

## Gebruik

1. Open een `.ts`- of `.js`-bestand.
2. Zet je cursor waar de code moet komen.
3. `Ctrl+Shift+P` → **Insert Quick Dutch Snippet**.
4. Kies een snippet uit de lijst.

## Requirements

Geen. De extensie werkt out of the box in VS Code 1.125.0 of hoger.

## Known Issues

Nog geen. Bug of wens? Open een issue in de repository.

## Release Notes

### 0.1.0

Eerste release met 7 snippets: BSN-, postcode-, IBAN- en telefoonnummervalidatie, datum- en valutaformattering, en BTW-berekening.

---

**Veel plezier!** 🇳🇱
