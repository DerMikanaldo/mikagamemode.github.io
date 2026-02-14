// docs.config.js
window.TRINITY_DOCS = [
  { modul: "Core › Faction", name: "Faction.GetPlayers", params: "Faction", type: "shared", beschreibung: "Gibt alle Spieler einer bestimmten Fraktion zurück" },
  { modul: "Core › Faction", name: "Player:GetFaction", params: "", type: "shared", beschreibung: "Gibt die aktuelle Fraktion des Spielers zurück" },
  { modul: "Core › Faction", name: "Player:IsCiv", params: "", type: "shared", beschreibung: "Prüft ob der Spieler ein Zivilist ist" },
  { modul: "Core › Faction", name: "Player:IsSith", params: "", type: "shared", beschreibung: "Prüft ob der Spieler ein Sith ist" },
  { modul: "Core › Faction", name: "Player:IsJedi", params: "", type: "shared", beschreibung: "Prüft ob der Spieler ein Jedi ist" },

  { modul: "Core › Money", name: "Player:GetMoney", params: "", type: "shared", beschreibung: "Gibt den aktuellen Kontostand zurück" },
  { modul: "Core › Money", name: "Player:AddMoney", params: "amount", type: "server", beschreibung: "Fügt dem Spieler Geld hinzu" },
  { modul: "Core › Money", name: "Player:SetMoney", params: "amount", type: "server", beschreibung: "Setzt den Kontostand" },
  { modul: "Core › Money", name: "Player:CanAfford", params: "amount", type: "shared", beschreibung: "Prüft ob sich der Spieler den Betrag leisten kann" },

  { modul: "Core › Name", name: "Player:SetName", params: "name", type: "server", beschreibung: "Setzt den RP-Namen" },
  { modul: "Core › Name", name: "Player:Nick", params: "", type: "shared", beschreibung: "Gibt den RP-Namen zurück" },
  { modul: "Core › Name", name: "Player:Name", params: "", type: "shared", beschreibung: "Gibt den RP-Namen zurück" },

  { modul: "Core › Rank", name: "TRINITY.AddRank", params: "name, data", type: "server", beschreibung: "Erstellt einen neuen Rank" },
  { modul: "Core › Rank", name: "Player:GetRank", params: "", type: "shared", beschreibung: "Gibt den Rang zurück" },
  { modul: "Core › Rank", name: "Player:GetRankTable", params: "", type: "shared", beschreibung: "Gibt Rank-Daten zurück" },
  { modul: "Core › Rank", name: "Player:Upranks", params: "", type: "server", beschreibung: "Befördert den Spieler" },
  { modul: "Core › Rank", name: "Player:DeRank", params: "", type: "server", beschreibung: "Degradiert den Spieler" },
  { modul: "Core › Rank", name: "Player:SetRank", params: "amount", type: "server", beschreibung: "Setzt den Rank" },

  { modul: "Core › Jobs", name: "TRINITY.AddJob", params: "name, data", type: "server", beschreibung: "Erstellt einen neuen Job" },
  { modul: "Core › Jobs", name: "Player:GetJob", params: "", type: "shared", beschreibung: "Gibt den aktuellen Job zurück" },
  { modul: "Core › Jobs", name: "Player:GetJobTable", params: "", type: "shared", beschreibung: "Gibt Job-Daten zurück" },
  { modul: "Core › Jobs", name: "Player:SetJob", params: "name", type: "server", beschreibung: "Setzt den Job" },

  { modul: "Modules › Test", name: "Player:SetTest", params: "name", type: "server", beschreibung: "Setzt Test-Wert" }
];
