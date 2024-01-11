interface Bird {

    eat(): void;   
    
}

interface FlyingBird {
    fly(): number;
}

interface SwinningBird {
    swin(): void;
}

interface RunningBird {
    run(): void;
}

class Tucan implements Bird, FlyingBird {

    public fly(){ return 100};
    public eat(){};
  
}

class Huminbird implements Bird, FlyingBird {

    public fly(){return 50};
    public eat(){};
    
}

class Ostrich implements Bird, RunningBird {

    public eat(){};
    public run(){};
    
}

class Penguin implements Bird, SwinningBird {
    
    public eat(){};
    public swin(){};
    
}
