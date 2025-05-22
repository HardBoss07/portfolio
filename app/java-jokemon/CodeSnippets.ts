export const GameState: string = `
public class GameState implements Serializable {
    private int seed;
    private int playerLevel;
    private int playerCoins;
    private int playerTreats;
    private int[] playerPosition;
    private int playerDirection;

    private List<JokemonData> playerJokemons;
    private List<JokemonData> jokemons;
    private List<WildJokemonData> wildJokemons;
    
    public GameState(int seed, int playerLevel, int playerCoins, int playerTreats, int[] playerPosition,
      int playerDirection, List<JokemonData> jokemons, List<WildJokemonData> wildJokemons) {
      
        this.seed = seed;
        this.playerLevel = playerLevel;
        this.playerCoins = playerCoins;
        this.playerTreats = playerTreats;
        this.playerPosition = playerPosition;
        this.playerDirection = playerDirection;
        this.jokemons = jokemons;
        this.wildJokemons = wildJokemons;
    }
`;

export const Building: string = `
public abstract class Building {
    // Enum for different building types
    public enum BuildingType {
        MEDICAL,
        SHOP,
        HOUSE,
        OUTSIDE
    }

    // Common properties
    protected int centerX;
    protected int centerY;
    protected BuildingType buildingType;
    protected boolean canEnter;
    protected char[][] design;

    // Constructor for the abstract class
    public Building(int centerX, int centerY, BuildingType buildingType, boolean canEnter, char[][] design) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.buildingType = buildingType;
        this.canEnter = canEnter;
        this.design = design;
    }

    // Getter for the Design of the abstract class
    public char[][] getBuildingDesign() {
        return design;
    }
`;