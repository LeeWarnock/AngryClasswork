class Charizard {
  
  // 'public' means clients of this class can access these fields.
  public $name = "Charizard";

  public $species = "Flame Pokemon";

  public $description = "Spits fire that is hot enough to melt boulders." . 
                        "Known to cause forest fires unintentionally.";

  // "private" means we can only see or use these fields inside of the class.
  private $weight = "199.5lbs";

  private $abilities = ["Blaze", "Solar Power"];
  
  /* Whenever you define a method inside of a class, you must mark it as
   *   public; private; or protected. We'll cover that last one shortly.  
   *
   *   Here, we have a public method, which any client can call. 
   *   */
  public function speak () {
    /* In $PHP, the $this keyword *always* means:
     *   "the object on which this method was called". */
     $this->println("Charizard!"); 
  }