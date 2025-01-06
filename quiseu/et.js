function drawScene(projectionMatrix, cameraMatrix, worldMatrix) {
  // Make a view matrix from the camera matrix
  const viewMatrix = m4.inverse(cameraMatrix);
  let mat = m4.multiply(projectionMatrix, viewMatrix);
  mat = m4.multiply(mat, worldMatrix);
  gl.useProgram(programInfo.program);
  // Set the uniforms
  twgl.setUniforms(programInfo, { u_matrix: mat });
  // Other rendering setup and draw calls
  twgl.drawBufferInfo(gl, bufferInfo);
}
