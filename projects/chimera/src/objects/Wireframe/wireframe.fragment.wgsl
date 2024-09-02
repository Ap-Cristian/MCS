@fragment
fn mainFragment(
  @location(0) fragUV: vec2f,
  @location(1) fragColor: vec4f
) -> @location(0) vec4f {
  return fragColor;
}