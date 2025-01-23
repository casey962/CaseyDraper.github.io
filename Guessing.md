```mermaid
flowchart TD
    A([Start]) -->|Ask Number| B(Guess a number)
    B --> |Correct Guess| C(your guess was right!)  
    B --> |Too High| D(your guess is too high!)
    B --> |Too Low| E(your guess is too low!)
    D --> |Retry| F(Guess again)
    E --> |Retry| F 
    C --> End([End])
```
