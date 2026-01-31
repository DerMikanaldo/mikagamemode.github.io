const docs = [
    {
        modul: "Core › Faction",
        name: "Faction.GetPlayers",
        params: "Faction",
        type: "shared",
        beschreibung: "Gibt alle Spieler einer bestimmten Fraktion zurück"
    },
    {
        modul: "Core › Faction",
        name: "Player:GetFaction",
        params: "",
        type: "shared",
        beschreibung: "Gibt die aktuelle Fraktion des Spielers zurück"
    },
    {
        modul: "Core › Faction",
        name: "Player:IsCiv",
        params: "",
        type: "shared",
        beschreibung: "Prüft ob der Spieler ein Zivilist ist"
    },
    {
        modul: "Core › Faction",
        name: "Player:IsSith",
        params: "",
        type: "shared",
        beschreibung: "Prüft ob der Spieler ein Sith ist"
    },
        {
        modul: "Core › Faction",
        name: "Player:IsJedi",
        params: "",
        type: "shared",
        beschreibung: "Prüft ob der Spieler ein Jedi ist"
    },
    {
        modul: "Core › Money",
        name: "Player:GetMoney",
        params: "",
        type: "shared",
        beschreibung: "Gibt den aktuellen Kontostand des Spielers zurück"
    },
    {
        modul: "Core › Money",
        name: "Player:AddMoney",
        params: "amount",
        type: "server",
        beschreibung: "Fügt dem Spieler Geld hinzu"
    },
    {
        modul: "Core › Money",
        name: "Player:SetMoney",
        params: "amount",
        type: "server", 
        beschreibung: "Setzt den Kontostand des Spielers auf einen bestimmten Betrag"
    },
    {
        modul: "Core › Money",
        name: "Player:CanAfford",
        params: "amount",
        type: "shared",
        beschreibung: "Prüft ob der Spieler sich einen bestimmten Betrag leisten kann"
    },
        {
        modul: "Core › Name",
        name: "Player:SetName",
        params: "name",
        type: "server",
        beschreibung: "Setzt den Rollenspiel-Namen eines Spielers"
    },
    {
        modul: "Core › Name",
        name: "Player:Nick",
        params: "",
        type: "shared",
        beschreibung: "Gibt den Rollenspiel-Namen des Spielers zurück (Überschreibt die Standard-Nick Funktion)"
    },
    {
        modul: "Core › Name",
        name: "Player:Name",
        params: "",
        type: "shared",
        beschreibung: "Gibt den Rollenspiel-Namen des Spielers zurück (Überschreibt die Standard-Name Funktion)"
    },
    {
        modul: "Core › Rank",
        name: "TRINITY.AddRank",
        params: "name, data",
        type: "server",
        beschreibung: "Erstellt einen neuen Job und synchronisiert ihn mit allen Clients"
    },
    {
        modul: "Core › Rank",
        name: "Player:GetRank",
        params: "",
        type: "shared",
        beschreibung: "Gibt den Rang des Spielers zurück"
    },
    {
        modul: "Core › Rank",
        name: "Player:GetRankTable",
        params: "",
        type: "shared",
        beschreibung: "Gibt die Rank-Daten des Spielers zurück"
    },
    {
        modul: "Core › Rank",
        name: "Player:Upranks",
        params: "",
        type: "server",
        beschreibung: "Befördert den Spieler zum nächsthöheren Rang"
    },
    {
        modul: "Core › Rank",
        name: "Player:DeRank",
        params: "",
        type: "server",
        beschreibung: "Degradiert den Spieler zum nächstniedrigeren Rang"
    },
    {
        modul: "Core › Rank",
        name: "Player:SetRank",
        params: "ammount",
        type: "server",
        beschreibung: "Setzt den Rank des Spielers"
    },
    {
        modul: "Core › Jobs",
        name: "TRINITY.AddJob",
        params: "name, data",
        type: "server",
        beschreibung: "Erstellt einen neuen Job und synchronisiert ihn mit allen Clients"
    },
    {
        modul: "Core › Jobs",
        name: "Player:GetJob",
        params: "",
        type: "shared",
        beschreibung: "Gibt den aktuellen Job des Spielers in seinem Karrierepfad zurück"
    },
    {
        modul: "Core › Jobs",
        name: "Player:GetJobTable",
        params: "",
        type: "shared",
        beschreibung: "Gibt die Job-Daten des Spielers zurück"
    },
    {
        modul: "Core › Jobs",
        name: "Player:SetJob",
        params: "name",
        type: "server",
        beschreibung: "Setzt den Job des Spielers"
    },
];