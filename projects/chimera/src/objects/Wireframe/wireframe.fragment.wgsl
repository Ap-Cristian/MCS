@fragment
fn mainFragment(
  @location(0) fragUV: vec2f,
  @location(1) fragPosition: vec4f
) -> @location(0) vec4f {
  return vec4f(1.0, 1.0, 1.0, 0.0);
}