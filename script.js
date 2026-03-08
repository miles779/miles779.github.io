// Load the current count from Supabase
async function loadCount() {
  const { data, error } = await supabase
    .from("clicks")
    .select("count")
    .eq("id", 1)
    .single();

  if (error) {
    document.getElementById("counter-text").textContent =
      "Error loading count.";
    return;
  }

  document.getElementById("counter-text").textContent =
    `Global clicks: ${data.count}`;
}

// Increase the count using the Supabase function
async function incrementCount() {
  const { data, error } = await supabase.rpc("increment_clicks");

  if (error) {
    console.error(error);
    return;
  }

  document.getElementById("counter-text").textContent =
    `Global clicks: ${data}`;
}

// Button click event
document.getElementById("click-btn").addEventListener("click", incrementCount);

// Load the count on page start
loadCount();
