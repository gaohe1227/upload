/**
@type {boolean}
*/
WebGLContextAttributes.prototype.alpha = 0;
/**
@type {boolean}
*/
WebGLContextAttributes.prototype.depth = 0;
/**
@type {boolean}
*/
WebGLContextAttributes.prototype.stencil = 0;
/**
@type {boolean}
*/
WebGLContextAttributes.prototype.antialias = 0;
/**
@type {boolean}
*/
WebGLContextAttributes.prototype.premultipliedAlpha = 0;
/**
@type {boolean}
*/
WebGLContextAttributes.prototype.preserveDrawingBuffer = 0;
WebGLContextAttributes = {};


WebGLBuffer.prototype = new WebGLObject();

WebGLFramebuffer.prototype = new WebGLObject();

WebGLProgram.prototype = new WebGLObject();

WebGLRenderbuffer.prototype = new WebGLObject();

WebGLShader.prototype = new WebGLObject();

WebGLTexture.prototype = new WebGLObject();


/**
@type {Number}
@const
*/
WebGLActiveInfo.prototype.size = 0;
/**
@type {Number}
@const
*/
WebGLActiveInfo.prototype.type = 0;
/**
@type {string}
@const
*/
WebGLActiveInfo.prototype.name = null;

/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DEPTH_BUFFER_BIT = 0x00000100;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_BUFFER_BIT = 0x00000400;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.COLOR_BUFFER_BIT = 0x00004000;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.POINTS = 0x0000;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.LINES = 0x0001;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.LINE_LOOP = 0x0002;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.LINE_STRIP = 0x0003;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TRIANGLES = 0x0004;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TRIANGLE_STRIP = 0x0005;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TRIANGLE_FAN = 0x0006;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ZERO = 0;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ONE = 1;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SRC_COLOR = 0x0300;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ONE_MINUS_SRC_COLOR = 0x0301;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SRC_ALPHA = 0x0302;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ONE_MINUS_SRC_ALPHA = 0x0303;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DST_ALPHA = 0x0304;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ONE_MINUS_DST_ALPHA = 0x0305;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DST_COLOR = 0x0306;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ONE_MINUS_DST_COLOR = 0x0307;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SRC_ALPHA_SATURATE = 0x0308;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FUNC_ADD = 0x8006;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BLEND_EQUATION = 0x8009;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BLEND_EQUATION_RGB = 0x8009;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BLEND_EQUATION_ALPHA = 0x883D;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FUNC_SUBTRACT = 0x800A;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FUNC_REVERSE_SUBTRACT = 0x800B;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BLEND_DST_RGB = 0x80C8;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BLEND_SRC_RGB = 0x80C9;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BLEND_DST_ALPHA = 0x80CA;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BLEND_SRC_ALPHA = 0x80CB;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.CONSTANT_COLOR = 0x8001;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ONE_MINUS_CONSTANT_COLOR = 0x8002;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.CONSTANT_ALPHA = 0x8003;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ONE_MINUS_CONSTANT_ALPHA = 0x8004;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BLEND_COLOR = 0x8005;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ARRAY_BUFFER = 0x8892;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ELEMENT_ARRAY_BUFFER = 0x8893;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ARRAY_BUFFER_BINDING = 0x8894;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STREAM_DRAW = 0x88E0;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STATIC_DRAW = 0x88E4;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DYNAMIC_DRAW = 0x88E8;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BUFFER_SIZE = 0x8764;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BUFFER_USAGE = 0x8765;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.CURRENT_VERTEX_ATTRIB = 0x8626;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FRONT = 0x0404;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BACK = 0x0405;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FRONT_AND_BACK = 0x0408;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.CULL_FACE = 0x0B44;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BLEND = 0x0BE2;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DITHER = 0x0BD0;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_TEST = 0x0B90;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DEPTH_TEST = 0x0B71;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SCISSOR_TEST = 0x0C11;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.POLYGON_OFFSET_FILL = 0x8037;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SAMPLE_ALPHA_TO_COVERAGE = 0x809E;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SAMPLE_COVERAGE = 0x80A0;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.NO_ERROR = 0;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.INVALID_ENUM = 0x0500;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.INVALID_VALUE = 0x0501;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.INVALID_OPERATION = 0x0502;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.OUT_OF_MEMORY = 0x0505;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.CW = 0x0900;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.CCW = 0x0901;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.LINE_WIDTH = 0x0B21;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ALIASED_POINT_SIZE_RANGE = 0x846D;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ALIASED_LINE_WIDTH_RANGE = 0x846E;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.CULL_FACE_MODE = 0x0B45;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FRONT_FACE = 0x0B46;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DEPTH_RANGE = 0x0B70;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DEPTH_WRITEMASK = 0x0B72;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DEPTH_CLEAR_VALUE = 0x0B73;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DEPTH_FUNC = 0x0B74;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_CLEAR_VALUE = 0x0B91;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_FUNC = 0x0B92;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_FAIL = 0x0B94;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_PASS_DEPTH_FAIL = 0x0B95;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_PASS_DEPTH_PASS = 0x0B96;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_REF = 0x0B97;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_VALUE_MASK = 0x0B93;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_WRITEMASK = 0x0B98;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_BACK_FUNC = 0x8800;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_BACK_FAIL = 0x8801;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_BACK_REF = 0x8CA3;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_BACK_VALUE_MASK = 0x8CA4;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_BACK_WRITEMASK = 0x8CA5;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.VIEWPORT = 0x0BA2;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SCISSOR_BOX = 0x0C10;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.COLOR_CLEAR_VALUE = 0x0C22;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.COLOR_WRITEMASK = 0x0C23;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.UNPACK_ALIGNMENT = 0x0CF5;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.PACK_ALIGNMENT = 0x0D05;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.MAX_TEXTURE_SIZE = 0x0D33;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.MAX_VIEWPORT_DIMS = 0x0D3A;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SUBPIXEL_BITS = 0x0D50;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RED_BITS = 0x0D52;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.GREEN_BITS = 0x0D53;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BLUE_BITS = 0x0D54;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ALPHA_BITS = 0x0D55;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DEPTH_BITS = 0x0D56;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_BITS = 0x0D57;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.POLYGON_OFFSET_UNITS = 0x2A00;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.POLYGON_OFFSET_FACTOR = 0x8038;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE_BINDING_2D = 0x8069;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SAMPLE_BUFFERS = 0x80A8;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SAMPLES = 0x80A9;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SAMPLE_COVERAGE_VALUE = 0x80AA;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SAMPLE_COVERAGE_INVERT = 0x80AB;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.NUM_COMPRESSED_TEXTURE_FORMATS = 0x86A2;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.COMPRESSED_TEXTURE_FORMATS = 0x86A3;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DONT_CARE = 0x1100;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FASTEST = 0x1101;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.NICEST = 0x1102;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.GENERATE_MIPMAP_HINT = 0x8192;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BYTE = 0x1400;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.UNSIGNED_BYTE = 0x1401;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SHORT = 0x1402;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.UNSIGNED_SHORT = 0x1403;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.INT = 0x1404;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.UNSIGNED_INT = 0x1405;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FLOAT = 0x1406;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DEPTH_COMPONENT = 0x1902;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ALPHA = 0x1906;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RGB = 0x1907;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RGBA = 0x1908;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.LUMINANCE = 0x1909;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.LUMINANCE_ALPHA = 0x190A;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.UNSIGNED_SHORT_4_4_4_4 = 0x8033;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.UNSIGNED_SHORT_5_5_5_1 = 0x8034;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.UNSIGNED_SHORT_5_6_5 = 0x8363;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FRAGMENT_SHADER = 0x8B30;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.VERTEX_SHADER = 0x8B31;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.MAX_VERTEX_ATTRIBS = 0x8869;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.MAX_VARYING_VECTORS = 0x8DFC;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.MAX_TEXTURE_IMAGE_UNITS = 0x8872;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SHADER_TYPE = 0x8B4F;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DELETE_STATUS = 0x8B80;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.LINK_STATUS = 0x8B82;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.VALIDATE_STATUS = 0x8B83;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ATTACHED_SHADERS = 0x8B85;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ACTIVE_UNIFORMS = 0x8B86;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ACTIVE_ATTRIBUTES = 0x8B89;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SHADING_LANGUAGE_VERSION = 0x8B8C;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.CURRENT_PROGRAM = 0x8B8D;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.NEVER = 0x0200;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.LESS = 0x0201;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.EQUAL = 0x0202;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.LEQUAL = 0x0203;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.GREATER = 0x0204;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.NOTEQUAL = 0x0205;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.GEQUAL = 0x0206;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ALWAYS = 0x0207;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.KEEP = 0x1E00;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.REPLACE = 0x1E01;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.INCR = 0x1E02;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DECR = 0x1E03;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.INVERT = 0x150A;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.INCR_WRAP = 0x8507;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DECR_WRAP = 0x8508;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.VENDOR = 0x1F00;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RENDERER = 0x1F01;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.VERSION = 0x1F02;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.NEAREST = 0x2600;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.LINEAR = 0x2601;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.NEAREST_MIPMAP_NEAREST = 0x2700;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.LINEAR_MIPMAP_NEAREST = 0x2701;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.NEAREST_MIPMAP_LINEAR = 0x2702;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.LINEAR_MIPMAP_LINEAR = 0x2703;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE_MAG_FILTER = 0x2800;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE_MIN_FILTER = 0x2801;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE_WRAP_S = 0x2802;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE_WRAP_T = 0x2803;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE_2D = 0x0DE1;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE = 0x1702;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE_CUBE_MAP = 0x8513;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE_BINDING_CUBE_MAP = 0x8514;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE0 = 0x84C0;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE1 = 0x84C1;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE2 = 0x84C2;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE3 = 0x84C3;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE4 = 0x84C4;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE5 = 0x84C5;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE6 = 0x84C6;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE7 = 0x84C7;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE8 = 0x84C8;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE9 = 0x84C9;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE10 = 0x84CA;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE11 = 0x84CB;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE12 = 0x84CC;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE13 = 0x84CD;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE14 = 0x84CE;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE15 = 0x84CF;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE16 = 0x84D0;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE17 = 0x84D1;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE18 = 0x84D2;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE19 = 0x84D3;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE20 = 0x84D4;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE21 = 0x84D5;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE22 = 0x84D6;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE23 = 0x84D7;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE24 = 0x84D8;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE25 = 0x84D9;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE26 = 0x84DA;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE27 = 0x84DB;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE28 = 0x84DC;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE29 = 0x84DD;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE30 = 0x84DE;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.TEXTURE31 = 0x84DF;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.ACTIVE_TEXTURE = 0x84E0;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.REPEAT = 0x2901;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.CLAMP_TO_EDGE = 0x812F;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.MIRRORED_REPEAT = 0x8370;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FLOAT_VEC2 = 0x8B50;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FLOAT_VEC3 = 0x8B51;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FLOAT_VEC4 = 0x8B52;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.INT_VEC2 = 0x8B53;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.INT_VEC3 = 0x8B54;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.INT_VEC4 = 0x8B55;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BOOL = 0x8B56;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BOOL_VEC2 = 0x8B57;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BOOL_VEC3 = 0x8B58;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BOOL_VEC4 = 0x8B59;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FLOAT_MAT2 = 0x8B5A;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FLOAT_MAT3 = 0x8B5B;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FLOAT_MAT4 = 0x8B5C;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SAMPLER_2D = 0x8B5E;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.SAMPLER_CUBE = 0x8B60;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.COMPILE_STATUS = 0x8B81;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.LOW_FLOAT = 0x8DF0;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.MEDIUM_FLOAT = 0x8DF1;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.HIGH_FLOAT = 0x8DF2;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.LOW_INT = 0x8DF3;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.MEDIUM_INT = 0x8DF4;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.HIGH_INT = 0x8DF5;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FRAMEBUFFER = 0x8D40;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RENDERBUFFER = 0x8D41;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RGBA4 = 0x8056;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RGB5_A1 = 0x8057;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RGB565 = 0x8D62;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DEPTH_COMPONENT16 = 0x81A5;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_INDEX = 0x1901;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_INDEX8 = 0x8D48;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DEPTH_STENCIL = 0x84F9;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RENDERBUFFER_WIDTH = 0x8D42;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RENDERBUFFER_HEIGHT = 0x8D43;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RENDERBUFFER_RED_SIZE = 0x8D50;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RENDERBUFFER_GREEN_SIZE = 0x8D51;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RENDERBUFFER_BLUE_SIZE = 0x8D52;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RENDERBUFFER_ALPHA_SIZE = 0x8D53;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RENDERBUFFER_DEPTH_SIZE = 0x8D54;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RENDERBUFFER_STENCIL_SIZE = 0x8D55;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.COLOR_ATTACHMENT0 = 0x8CE0;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DEPTH_ATTACHMENT = 0x8D00;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.STENCIL_ATTACHMENT = 0x8D20;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.DEPTH_STENCIL_ATTACHMENT = 0x821A;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.NONE = 0;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FRAMEBUFFER_COMPLETE = 0x8CD5;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FRAMEBUFFER_UNSUPPORTED = 0x8CDD;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.FRAMEBUFFER_BINDING = 0x8CA6;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.RENDERBUFFER_BINDING = 0x8CA7;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.MAX_RENDERBUFFER_SIZE = 0x84E8;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.INVALID_FRAMEBUFFER_OPERATION = 0x0506;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL = 0x9240;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.CONTEXT_LOST_WEBGL = 0x9242;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
/**
@static
@type {number}
@const
*/
WebGLRenderingContext.BROWSER_DEFAULT_WEBGL = 0x9244;
/**
@type {HTMLCanvasElement}
@const
*/
WebGLRenderingContext.prototype.canvas = 0;
/**
@type {Number}
@const
*/
WebGLRenderingContext.prototype.drawingBufferWidth = 0;
/**
@type {Number}
@const
*/
WebGLRenderingContext.prototype.drawingBufferHeight = 0;
/**
@type {Array[WebGLShader]}
@const
*/
WebGLRenderingContext.prototype.getAttachedShaders = WebGLProgram;
/**
@return {WebGLContextAttributes}
*/
WebGLRenderingContext.prototype.getContextAttributes = function() {};
/**
@return {boolean}
*/
WebGLRenderingContext.prototype.isContextLost = function() {};
/**
@return {Array[String]}
*/
WebGLRenderingContext.prototype.getSupportedExtensions = function() {};
/**
@param {string} name
@return {*}
*/
WebGLRenderingContext.prototype.getExtension = function(name) {};
/**
@param {Number} texture
@return {void}
*/
WebGLRenderingContext.prototype.activeTexture = function(texture) {};
/**
@param {WebGLProgram} program
@param {WebGLShader} shader
@return {void}
*/
WebGLRenderingContext.prototype.attachShader = function(program,shader) {};
/**
@param {WebGLProgram} program
@param {Number} index
@param {string} name
@return {void}
*/
WebGLRenderingContext.prototype.bindAttribLocation = function(program,index,name) {};
/**
@param {Number} target
@param {WebGLBuffer} buffer
@return {void}
*/
WebGLRenderingContext.prototype.bindBuffer = function(target,buffer) {};
/**
@param {Number} target
@param {WebGLFramebuffer} framebuffer
@return {void}
*/
WebGLRenderingContext.prototype.bindFramebuffer = function(target,framebuffer) {};
/**
@param {Number} target
@param {WebGLRenderbuffer} renderbuffer
@return {void}
*/
WebGLRenderingContext.prototype.bindRenderbuffer = function(target,renderbuffer) {};
/**
@param {Number} target
@param {WebGLTexture} texture
@return {void}
*/
WebGLRenderingContext.prototype.bindTexture = function(target,texture) {};
/**
@param {Number} red
@param {Number} green
@param {Number} blue
@param {Number} alpha
@return {void}
*/
WebGLRenderingContext.prototype.blendColor = function(red,green,blue,alpha) {};
/**
@param {Number} mode
@return {void}
*/
WebGLRenderingContext.prototype.blendEquation = function(mode) {};
/**
@param {Number} modeRGB
@param {Number} modeAlpha
*/
WebGLRenderingContext.prototype.blendEquationSeparate = function(modeRGB,modeAlpha) {};
/**
@param {Number} sfactor
@param {Number} dfactor
*/
WebGLRenderingContext.prototype.blendFunc = function(sfactor,dfactor) {};
/**
@param {Number} srcRGB
@param {Number} dstRGB
@param {Number} srcAlpha
@param {Number} dstAlpha
@return {void}
*/
WebGLRenderingContext.prototype.blendFuncSeparate = function(srcRGB,dstRGB,srcAlpha,dstAlpha) {};
/**
@param {Number} target
@param {Number} size
@param {Number} usage
*/
WebGLRenderingContext.prototype.bufferData = function(target,size,usage) {};
/**
@param {Number} target
@param {ArrayBufferView} data
@param {Number} usage
*/
WebGLRenderingContext.prototype.bufferData = function(target,data,usage) {};
/**
@param {Number} target
@param {ArrayBuffer} data
@param {Number} usage
*/
WebGLRenderingContext.prototype.bufferData = function(target,data,usage) {};
/**
@param {Number} target
@param {Number} offset
@param {ArrayBufferView} data
*/
WebGLRenderingContext.prototype.bufferSubData = function(target,offset,data) {};
/**
@param {Number} target
@param {Number} offset
@param {ArrayBuffer} data
*/
WebGLRenderingContext.prototype.bufferSubData = function(target,offset,data) {};
/**
@param {Number} target
@return {Number}
*/
WebGLRenderingContext.prototype.checkFramebufferStatus = function(target) {};
/**
@param {number} mask
@return {void}
*/
WebGLRenderingContext.prototype.clear = function(mask) {};
/**
@param {Number} red
@param {Number} green
@param {Number} blue
@param {Number} alpha
@return {void}
*/
WebGLRenderingContext.prototype.clearColor = function(red,green,blue,alpha) {};
/**
@param {Number} depth
@return {void}
*/
WebGLRenderingContext.prototype.clearDepth = function(depth) {};
/**
@param {Number} s
@return {void}
*/
WebGLRenderingContext.prototype.clearStencil = function(s) {};
/**
@param {boolean} red
@param {boolean} green
@param {boolean} blue
@param {boolean} alpha
@return {void}
*/
WebGLRenderingContext.prototype.colorMask = function(red,green,blue,alpha) {};
/**
@param {WebGLShader} [shader]
@return {void}
*/
WebGLRenderingContext.prototype.compileShader = function(shader) {};
/**
@param {Number} target
@param {Number} level
@param {Number} internalformat
@param {Number} x
@param {Number} y
@param {Number} width
@param {Number} height
@param {Number} border
@return {void}
*/
WebGLRenderingContext.prototype.copyTexImage2D = function(target,level,internalformat,x,y,width,height,border) {};
/**
@param {Number} target
@param {Number} level
@param {Number} xoffset
@param {Number} yoffset
@param {Number} x
@param {Number} y
@param {Number} width
@param {Number} height
@return {void}
*/
WebGLRenderingContext.prototype.copyTexSubImage2D = function(target,level,xoffset,yoffset,x,y,width,height) {};
/**
@return {WebGLBuffer}
*/
WebGLRenderingContext.prototype.createBuffer = function() {};
/**
@return {WebGLFramebuffer}
*/
WebGLRenderingContext.prototype.createFramebuffer = function() {};
/**
@return {WebGLProgram}
*/
WebGLRenderingContext.prototype.createProgram = function() {};
/**
@return {WebGLRenderbuffer}
*/
WebGLRenderingContext.prototype.createRenderbuffer = function() {};
/**
@param {Number} type
@return {WebGLShader}
*/
WebGLRenderingContext.prototype.createShader = function(type) {};
/**
@return {WebGLTexture}
*/
WebGLRenderingContext.prototype.createTexture = function() {};
/**
@param {Number} mode
@return {void}
*/
WebGLRenderingContext.prototype.cullFace = function(mode) {};
/**
@param {WebGLBuffer} buffer
@return {void}
*/
WebGLRenderingContext.prototype.deleteBuffer = function(buffer) {};
/**
@param {WebGLRenderbuffer} framebuffer
@return {void}
*/
WebGLRenderingContext.prototype.deleteFramebuffer = function(framebuffer) {};
/**
@param {WebGLProgram} program
@return {void}
*/
WebGLRenderingContext.prototype.deleteProgram = function(program) {};
/**
@param {WebGLRenderbuffer} renderbuffer
@return {void}
*/
WebGLRenderingContext.prototype.deleteRenderbuffer = function(renderbuffer) {};
/**
@param {WebGLShader} shader
@return {void}
*/
WebGLRenderingContext.prototype.deleteShader = function(shader) {};
/**
@param {WebGLTexture} texture
@return {void}
*/
WebGLRenderingContext.prototype.deleteTexture = function(texture) {};
/**
@param {Number} func
@return {void}
*/
WebGLRenderingContext.prototype.depthFunc = function(func) {};
/**
@param {boolean} flag
@return {void}
*/
WebGLRenderingContext.prototype.depthMask = function(flag) {};
/**
@param {Number} zNear
@param {Number} zFar
*/
WebGLRenderingContext.prototype.depthRange = function(zNear,zFar) {};
/**
@param {WebGLProgram} program
@param {WebGLShader} shader
*/
WebGLRenderingContext.prototype.detachShader = function(program,shader) {};
/**
@param {Number} cap
@return {void}
*/
WebGLRenderingContext.prototype.disable = function(cap) {};
/**
@param {Number} index
@return {void}
*/
WebGLRenderingContext.prototype.disableVertexAttribArray = function(index) {};
/**
@param {Number} mode
@param {Number} first
@param {Number} count
*/
WebGLRenderingContext.prototype.drawArrays = function(mode,first,count) {};
/**
@param {Number} mode
@param {Number} count
@param {Number} type
@param {Number} offset
@return {void}
*/
WebGLRenderingContext.prototype.drawElements = function(mode,count,type,offset) {};
/**
@param {Number} cap
@return {void}
*/
WebGLRenderingContext.prototype.enable = function(cap) {};
/**
@param {Number} index
@return {void}
*/
WebGLRenderingContext.prototype.enableVertexAttribArray = function(index) {};
/**
@return {void}
*/
WebGLRenderingContext.prototype.finish = function() {};
/**
@return {void}
*/
WebGLRenderingContext.prototype.flush = function() {};
/**
@param {Number} target
@param {Number} attachment
@param {Number} renderbuffertarget
@param {WebGLRenderbuffer} renderbuffer
@return {void}
*/
WebGLRenderingContext.prototype.framebufferRenderbuffer = function(target,attachment,renderbuffertarget,renderbuffer) {};
/**
@param {Number} target
@param {Number} attachment
@param {Number} textarget
@param {WebGLTexture} texture
@param {Number} level
@return {void}
*/
WebGLRenderingContext.prototype.framebufferTexture2D = function(target,attachment,textarget,texture,level) {};
/**
@param {Number} mode
@return {void}
*/
WebGLRenderingContext.prototype.frontFace = function(mode) {};
/**
@param {Number} target
@return {void}
*/
WebGLRenderingContext.prototype.generateMipmap = function(target) {};
/**
@param {WebGLProgram} program
@param {Number} index
*/
WebGLRenderingContext.prototype.getActiveAttrib = function(program,index) {};
/**
@param {WebGLProgram} program
@param {Number} index
*/
WebGLRenderingContext.prototype.getActiveUniform = function(program,index) {};
/**
@param {WebGLProgram} program
@param {string} name
*/
WebGLRenderingContext.prototype.getAttribLocation = function(program,name) {};
/**
@param {Number} pname
@return {*}
*/
WebGLRenderingContext.prototype.getParameter = function(pname) {};
/**
@param {Number} target
@param {Number} pname
*/
WebGLRenderingContext.prototype.getBufferParameter = function(target,pname) {};
/**
@return {Number}
*/
WebGLRenderingContext.prototype.getError = function() {};
/**
@param {Number} target
@param {Number} attachment
@param {Number} pname
*/
WebGLRenderingContext.prototype.getFramebufferAttachmentParameter = function(target,attachment,pname) {};
/**
@param {WebGLProgram} program
@param {Number} pname
*/
WebGLRenderingContext.prototype.getProgramParameter = function(program,pname) {};
/**
@param {WebGLProgram} program
@return {string}
*/
WebGLRenderingContext.prototype.getProgramInfoLog = function(program) {};
/**
@param {Number} target
@param {Number} pname
*/
WebGLRenderingContext.prototype.getRenderbufferParameter = function(target,pname) {};
/**
@param {WebGLShader} shader
@param {Number} pname
*/
WebGLRenderingContext.prototype.getShaderParameter = function(shader,pname) {};
/**
@param {WebGLShader} shader
@return {string}
*/
WebGLRenderingContext.prototype.getShaderInfoLog = function(shader) {};
/**
@param {WebGLShader} shader
@return {string}
*/
WebGLRenderingContext.prototype.getShaderSource = function(shader) {};
/**
@param {Number} target
@param {Number} pname
*/
WebGLRenderingContext.prototype.getTexParameter = function(target,pname) {};
/**
@param {WebGLProgram} program
@param {WebGLUniformLocation} location
*/
WebGLRenderingContext.prototype.getUniform = function(program,location) {};
/**
@param {WebGLProgram} program
@param {string} name
*/
WebGLRenderingContext.prototype.getUniformLocation = function(program,name) {};
/**
@param {Number} index
@param {Number} pname
*/
WebGLRenderingContext.prototype.getVertexAttrib = function(index,pname) {};
/**
@param {Number} index
@param {Number} pname
*/
WebGLRenderingContext.prototype.getVertexAttribOffset = function(index,pname) {};
/**
@param {Number} target
@param {Number} mode
*/
WebGLRenderingContext.prototype.hint = function(target,mode) {};
/**
@param {WebGLBuffer} buffer
@return {boolean}
*/
WebGLRenderingContext.prototype.isBuffer = function(buffer) {};
/**
@param {Number} cap
@return {boolean}
*/
WebGLRenderingContext.prototype.isEnabled = function(cap) {};
/**
@param {WebGLFramebuffer} framebuffer
@return {boolean}
*/
WebGLRenderingContext.prototype.isFramebuffer = function(framebuffer) {};
/**
@param {WebGLProgram} program
@return {boolean}
*/
WebGLRenderingContext.prototype.isProgram = function(program) {};
/**
@param {WebGLRenderbuffer} renderbuffer
@return {boolean}
*/
WebGLRenderingContext.prototype.isRenderbuffer = function(renderbuffer) {};
/**
@param {WebGLShader} shader
@return {boolean}
*/
WebGLRenderingContext.prototype.isShader = function(shader) {};
/**
@param {WebGLTexture} texture
@return {boolean}
*/
WebGLRenderingContext.prototype.isTexture = function(texture) {};
/**
@param {Number} width
@return {void}
*/
WebGLRenderingContext.prototype.lineWidth = function(width) {};
/**
@param {WebGLProgram} program
@return {void}
*/
WebGLRenderingContext.prototype.linkProgram = function(program) {};
/**
@param {Number} pname
@param {Number} param
*/
WebGLRenderingContext.prototype.pixelStorei = function(pname,param) {};
/**
@param {Number} factor
@param {Number} units
*/
WebGLRenderingContext.prototype.polygonOffset = function(factor,units) {};
/**
@param {Number} x
@param {Number} y
@param {Number} width
@param {Number} height
@param {Number} format
@param {Number} type
@param {ArrayBufferView} pixels
*/
WebGLRenderingContext.prototype.readPixels = function(x,y,width,height,format,type,pixels) {};
/**
@param {Number} target
@param {Number} internalformat
@param {Number} width
@param {Number} height
*/
WebGLRenderingContext.prototype.renderbufferStorage = function(target,internalformat,width,height) {};
/**
@param {Number} [value]
@param {boolean} invert
*/
WebGLRenderingContext.prototype.sampleCoverage = function(value,invert) {};
/**
@param {Number} x
@param {Number} y
@param {Number} width
@param {Number} height
*/
WebGLRenderingContext.prototype.scissor = function(x,y,width,height) {};
/**
@param {WebGLShader} shader
@param {string} source
*/
WebGLRenderingContext.prototype.shaderSource = function(shader,source) {};
/**
@param {Number} func
@param {Number} ref
@param {Number} mask
*/
WebGLRenderingContext.prototype.stencilFunc = function(func,ref,mask) {};
/**
@param {Number} face
@param {Number} func
@param {Number} ref
@param {Number} mask
*/
WebGLRenderingContext.prototype.stencilFuncSeparate = function(face,func,ref,mask) {};
/**
@param {Number} mask
@return {void}
*/
WebGLRenderingContext.prototype.stencilMask = function(mask) {};
/**
@param {Number} face
@param {Number} mask
*/
WebGLRenderingContext.prototype.stencilMaskSeparate = function(face,mask) {};
/**
@param {Number} fail
@param {Number} zfail
@param {Number} zpass
*/
WebGLRenderingContext.prototype.stencilOp = function(fail,zfail,zpass) {};
/**
@param {Number} face
@param {Number} fail
@param {Number} zfail
@param {Number} zpass
*/
WebGLRenderingContext.prototype.stencilOpSeparate = function(face,fail,zfail,zpass) {};
/**
@param {Number} target
@param {Number} level
@param {Number} internalformat
@param {Number} width
@param {Number} height
@param {Number} border
@param {Number} format
@param {Number} type
@param {ArrayBufferView} pixels
*/
WebGLRenderingContext.prototype.texImage2D = function(target,level,internalformat,width,height,border,format,type,pixels) {};
/**
@param {Number} target
@param {Number} level
@param {Number} internalformat
@param {Number} format
@param {Number} type
@param {ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} pixelsImageCanvasOrVideo
*/
WebGLRenderingContext.prototype.texImage2D = function(target,level,internalformat,format,type,pixelsImageCanvasOrVideo) {};
/**
@param {Number} target
@param {Number} pname
@param {Number} param
*/
WebGLRenderingContext.prototype.texParameterf = function(target,pname,param) {};
/**
@param {Number} target
@param {Number} pname
@param {Number} param
*/
WebGLRenderingContext.prototype.texParameteri = function(target,pname,param) {};
/**
@param {Number} target
@param {Number} level
@param {Number} xoffset
@param {Number} yoffset
@param {Number} width
@param {Number} height
@param {Number} format
@param {Number} type
@param {ArrayBufferView} pixels
*/
WebGLRenderingContext.prototype.texSubImage2D = function(target,level,xoffset,yoffset,width,height,format,type,pixels) {};
/**
@param {Number} target
@param {Number} level
@param {Number} xoffset
@param {Number} yoffset
@param {Number} format
@param {Number} type
@param {ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} pixelsImageCanvasOrVideo
*/
WebGLRenderingContext.prototype.texSubImage2D = function(target,level,xoffset,yoffset,format,type,pixelsImageCanvasOrVideo) {};
/**
@param {WebGLUniformLocation} location
@param {Number} x
*/
WebGLRenderingContext.prototype.uniform1f = function(location,x) {};
/**
@param {WebGLUniformLocation} location
@param {Float32Array} v
*/
WebGLRenderingContext.prototype.uniform1fv = function(location,v) {};
/**
@param {WebGLUniformLocation} location
@param {Array[Number]} [v]
*/
WebGLRenderingContext.prototype.uniform1fv = function(location,v) {};
/**
@param {WebGLUniformLocation} location
@param {Number} x
*/
WebGLRenderingContext.prototype.uniform1i = function(location,x) {};
/**
@param {WebGLUniformLocation} location
@param {Int32Array} v
*/
WebGLRenderingContext.prototype.uniform1iv = function(location,v) {};
/**
@param {WebGLUniformLocation} location
@param {Array[Number]} [v]
*/
WebGLRenderingContext.prototype.uniform1iv = function(location,v) {};
/**
@param {WebGLUniformLocation} location
@param {Number} x
@param {Number} y
*/
WebGLRenderingContext.prototype.uniform2f = function(location,x,y) {};
/**
@param {WebGLUniformLocation} location
@param {Float32Array} v
*/
WebGLRenderingContext.prototype.uniform2fv = function(location,v) {};
/**
@param {WebGLUniformLocation} location
@param {Array[Number]} [v]
*/
WebGLRenderingContext.prototype.uniform2fv = function(location,v) {};
/**
@param {WebGLUniformLocation} location
@param {Number} x
@param {Number} y
*/
WebGLRenderingContext.prototype.uniform2i = function(location,x,y) {};
/**
@param {WebGLUniformLocation} location
@param {Int32Array} v
*/
WebGLRenderingContext.prototype.uniform2iv = function(location,v) {};
/**
@param {WebGLUniformLocation} location
@param {Array[Number]} v
*/
WebGLRenderingContext.prototype.uniform2iv = function(location,v) {};
/**
@param {WebGLUniformLocation} location
@param {Number} x
@param {Number} y
@param {Number} z
*/
WebGLRenderingContext.prototype.uniform3f = function(location,x,y,z) {};
/**
@param {WebGLUniformLocation} location
@param {Float32Array} v
*/
WebGLRenderingContext.prototype.uniform3fv = function(location,v) {};
/**
@param {WebGLUniformLocation} location
@param {Array[Number]} v
*/
WebGLRenderingContext.prototype.uniform3fv = function(location,v) {};
/**
@param {WebGLUniformLocation} location
@param {Number} x
@param {Number} y
@param {Number} z
*/
WebGLRenderingContext.prototype.uniform3i = function(location,x,y,z) {};
/**
@param {WebGLUniformLocation} location
@param {Int32Array} v
*/
WebGLRenderingContext.prototype.uniform3iv = function(location,v) {};
/**
@param {WebGLUniformLocation} location
@param {Array[Number]} v
*/
WebGLRenderingContext.prototype.uniform3iv = function(location,v) {};
/**
@param {WebGLUniformLocation} location
@param {Number} x
@param {Number} y
@param {Number} z
@param {Number} w
*/
WebGLRenderingContext.prototype.uniform4f = function(location,x,y,z,w) {};
/**
@param {WebGLUniformLocation} location
@param {Float32Array} v
*/
WebGLRenderingContext.prototype.uniform4fv = function(location,v) {};
/**
@param {WebGLUniformLocation} location
@param {Array[Number]} v
*/
WebGLRenderingContext.prototype.uniform4fv = function(location,v) {};
/**
@param {WebGLUniformLocation} location
@param {Number} x
@param {Number} y
@param {Number} z
@param {Number} w
*/
WebGLRenderingContext.prototype.uniform4i = function(location,x,y,z,w) {};
/**
@param {WebGLUniformLocation} location
@param {Int32Array} v
*/
WebGLRenderingContext.prototype.uniform4iv = function(location,v) {};
/**
@param {WebGLUniformLocation} location
@param {Array[Number]} v
*/
WebGLRenderingContext.prototype.uniform4iv = function(location,v) {};
/**
@param {WebGLUniformLocation} location
@param {boolean} transpose
@param {Float32Array} value
*/
WebGLRenderingContext.prototype.uniformMatrix2fv = function(location,transpose,value) {};
/**
@param {WebGLUniformLocation} location
@param {boolean} transpose
@param {Array[Number]} value
*/
WebGLRenderingContext.prototype.uniformMatrix2fv = function(location,transpose,value) {};
/**
@param {WebGLUniformLocation} location
@param {boolean} transpose
@param {Float32Array} value
*/
WebGLRenderingContext.prototype.uniformMatrix3fv = function(location,transpose,value) {};
/**
@param {WebGLUniformLocation} location
@param {boolean} transpose
@param {Array[Number]} value
*/
WebGLRenderingContext.prototype.uniformMatrix3fv = function(location,transpose,value) {};
/**
@param {WebGLUniformLocation} location
@param {boolean} transpose
@param {Float32Array} value
*/
WebGLRenderingContext.prototype.uniformMatrix4fv = function(location,transpose,value) {};
/**
@param {WebGLUniformLocation} location
@param {boolean} transpose
@param {Array[Number]} value
*/
WebGLRenderingContext.prototype.uniformMatrix4fv = function(location,transpose,value) {};
/**
@param {WebGLProgram} program
@return {void}
*/
WebGLRenderingContext.prototype.useProgram = function(program) {};
/**
@param {WebGLProgram} program
@return {void}
*/
WebGLRenderingContext.prototype.validateProgram = function(program) {};
/**
@param {Number} indx
@param {Number} x
*/
WebGLRenderingContext.prototype.vertexAttrib1f = function(indx,x) {};
/**
@param {Number} indx
@param {Float32Array} values
*/
WebGLRenderingContext.prototype.vertexAttrib1fv = function(indx,values) {};
/**
@param {Number} indx
@param {Array[Number]} values
*/
WebGLRenderingContext.prototype.vertexAttrib1fv = function(indx,values) {};
/**
@param {Number} indx
@param {Number} x
@param {Number} y
*/
WebGLRenderingContext.prototype.vertexAttrib2f = function(indx,x,y) {};
/**
@param {Number} indx
@param {Float32Array} values
*/
WebGLRenderingContext.prototype.vertexAttrib2fv = function(indx,values) {};
/**
@param {Number} indx
@param {Array[Number]} values
*/
WebGLRenderingContext.prototype.vertexAttrib2fv = function(indx,values) {};
/**
@param {Number} indx
@param {Number} x
@param {Number} y
@param {Number} z
*/
WebGLRenderingContext.prototype.vertexAttrib3f = function(indx,x,y,z) {};
/**
@param {Number} indx
@param {Float32Array} values
*/
WebGLRenderingContext.prototype.vertexAttrib3fv = function(indx,values) {};
/**
@param {Number} indx
@param {Array[Number]} values
*/
WebGLRenderingContext.prototype.vertexAttrib3fv = function(indx,values) {};
/**
@param {Number} indx
@param {Number} x
@param {Number} y
@param {Number} z
@param {Number} w
*/
WebGLRenderingContext.prototype.vertexAttrib4f = function(indx,x,y,z,w) {};
/**
@param {Number} indx
@param {Float32Array} values
*/
WebGLRenderingContext.prototype.vertexAttrib4fv = function(indx,values) {};
/**
@param {Number} indx
@param {Array[Number]} values
*/
WebGLRenderingContext.prototype.vertexAttrib4fv = function(indx,values) {};
/**
@param {Number} indx
@param {Number} size
@param {Number} type
@param {boolean} normalized
@param {Number} stride
@param {Number} offset
*/
WebGLRenderingContext.prototype.vertexAttribPointer = function(indx,size,type,normalized,stride,offset) {};
/**
@param {Number} x
@param {Number} y
@param {Number} width
@param {Number} height
@return {void}
*/
WebGLRenderingContext.prototype.viewport = function(x,y,width,height) {};
WebGLRenderingContext = {};

/**
@type {string}
@const
*/
WebGLContextEvent.prototype.statusMessage = null;
/**
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {string} statusMessageArg
@return {void}
*/
WebGLContextEvent.prototype.initWebGLContextEvent = function(typeArg,canBubbleArg,cancelableArg,statusMessageArg) {};
WebGLContextEvent.prototype = new Event();
WebGLContextEvent = {};
