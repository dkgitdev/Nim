/* Generated by the Nim Compiler v1.9.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI134217749 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217751 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217741 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217743 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554435 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555818 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555171 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555179 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554450 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555178 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555175 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555176 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217745 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554449 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI134217745 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217745.node = NNI134217745;
var NNI33555176 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555176.node = NNI33555176;
NTI33555178.base = NTI33555175;
NTI33555179.base = NTI33555175;
var NNI33555175 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555178, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554450, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554449, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554449, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555179, name: "up", sons: null}]};
NTI33555175.node = NNI33555175;
var NNI33555171 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555171.node = NNI33555171;
NTI33555175.base = NTI33555171;
NTI33555176.base = NTI33555175;
NTI134217745.base = NTI33555176;
var NNI33555818 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554450, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554435, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554450, name: "Field2", sons: null}]};
NTI33555818.node = NNI33555818;
var NNI134217743 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217743.node = NNI134217743;
var NNI134217741 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217741.node = NNI134217741;
NTI134217741.base = NTI33555176;
NTI134217743.base = NTI134217741;
var NNI134217751 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217751.node = NNI134217751;
NTI134217751.base = NTI33555176;
var NNI134217749 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217749.node = NNI134217749;
NTI134217749.base = NTI33555176;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557083, src_33557084, ti_33557085) {
  var result_33557094 = null;

    switch (ti_33557085.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557074(ti_33557085))) {
      result_33557094 = src_33557084;
      }
      else {
        result_33557094 = [src_33557084[0], src_33557084[1]];
      }
      
      break;
    case 19:
            if (dest_33557083 === null || dest_33557083 === undefined) {
        dest_33557083 = {};
      }
      else {
        for (var key in dest_33557083) { delete dest_33557083[key]; }
      }
      for (var key in src_33557084) { dest_33557083[key] = src_33557084[key]; }
      result_33557094 = dest_33557083;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557085.base == null))) {
      result_33557094 = nimCopy(dest_33557083, src_33557084, ti_33557085.base);
      }
      else {
      if ((ti_33557085.kind == 17)) {
      result_33557094 = (dest_33557083 === null || dest_33557083 === undefined) ? {m_type: ti_33557085} : dest_33557083;
      }
      else {
        result_33557094 = (dest_33557083 === null || dest_33557083 === undefined) ? {} : dest_33557083;
      }
      }
      nimCopyAux(result_33557094, src_33557084, ti_33557085.node);
      break;
    case 4:
    case 16:
            if(ArrayBuffer.isView(src_33557084)) { 
        if(dest_33557083 === null || dest_33557083 === undefined || dest_33557083.length != src_33557084.length) {
          dest_33557083 = new src_33557084.constructor(src_33557084);
        } else {
          dest_33557083.set(src_33557084, 0);
        }
        result_33557094 = dest_33557083;
      } else {
        if (src_33557084 === null) {
          result_33557094 = null;
        }
        else {
          if (dest_33557083 === null || dest_33557083 === undefined || dest_33557083.length != src_33557084.length) {
            dest_33557083 = new Array(src_33557084.length);
          }
          result_33557094 = dest_33557083;
          for (var i = 0; i < src_33557084.length; ++i) {
            result_33557094[i] = nimCopy(result_33557094[i], src_33557084[i], ti_33557085.base);
          }
        }
      }
    
      break;
    case 24:
    case 27:
            if (src_33557084 === null) {
        result_33557094 = null;
      }
      else {
        if (dest_33557083 === null || dest_33557083 === undefined || dest_33557083.length != src_33557084.length) {
          dest_33557083 = new Array(src_33557084.length);
        }
        result_33557094 = dest_33557083;
        for (var i = 0; i < src_33557084.length; ++i) {
          result_33557094[i] = nimCopy(result_33557094[i], src_33557084[i], ti_33557085.base);
        }
      }
    
      break;
    case 28:
            if (src_33557084 !== null) {
        result_33557094 = src_33557084.slice(0);
      }
    
      break;
    default: 
      result_33557094 = src_33557084;
      break;
    }

  return result_33557094;

}

function arrayConstr(len_33557122, value_33557123, typ_33557124) {
        var result = new Array(len_33557122);
    for (var i = 0; i < len_33557122; ++i) result[i] = nimCopy(null, value_33557123, typ_33557124);
    return result;
  

  
}

function mnewString(len_33556836) {
        return new Array(len_33556836);
  

  
}

function addInt(a_33556883, b_33556884) {
        var result = a_33556883 + b_33556884;
    checkOverflowInt(result);
    return result;
  

  
}

function chckRange(i_33557132, a_33557133, b_33557134) {
  var result_33557135 = 0;

  BeforeRet: {
    if (((a_33557133 <= i_33557132) && (i_33557132 <= b_33557134))) {
    result_33557135 = i_33557132;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  };

  return result_33557135;

}

function chckIndx(i_33557127, a_33557128, b_33557129) {
  var result_33557130 = 0;

  BeforeRet: {
    if (((a_33557128 <= i_33557127) && (i_33557127 <= b_33557129))) {
    result_33557130 = i_33557127;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557127, a_33557128, b_33557129);
    }
    
  };

  return result_33557130;

}

function cstrToNimstr(c_33556744) {
      var ln = c_33556744.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556744.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556744.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function toJSStr(s_33556747) {
  var result_33556748 = null;

    var res_33556782 = newSeq_33556765((s_33556747).length);
    var i_33556783 = 0;
    var j_33556784 = 0;
    Label1: {
        Label2: while (true) {
        if (!(i_33556783 < (s_33556747).length)) break Label2;
          var c_33556785 = s_33556747[i_33556783];
          if ((c_33556785 < 128)) {
          res_33556782[j_33556784] = String.fromCharCode(c_33556785);
          i_33556783 += 1;
          }
          else {
            var helper_33556798 = newSeq_33556765(0);
            Label3: {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556799 = c_33556785.toString(16);
                  if ((((code_33556799) == null ? 0 : (code_33556799).length) == 1)) {
                  helper_33556798.push("%0");;
                  }
                  else {
                  helper_33556798.push("%");;
                  }
                  
                  helper_33556798.push(code_33556799);;
                  i_33556783 += 1;
                  if ((((s_33556747).length <= i_33556783) || (s_33556747[i_33556783] < 128))) {
                  break Label3;
                  }
                  
                  c_33556785 = s_33556747[i_33556783];
                }
            };
++excHandler;
            try {
            res_33556782[j_33556784] = decodeURIComponent(helper_33556798.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            res_33556782[j_33556784] = helper_33556798.join("");
            lastJSError = prevJSError;
            } finally {
            }
          }
          
          j_33556784 += 1;
        }
    };
    if (res_33556782.length < j_33556784) { for (var i = res_33556782.length ; i < j_33556784 ; ++i) res_33556782.push(null); }
               else { res_33556782.length = j_33556784; };
    result_33556748 = res_33556782.join("");

  return result_33556748;

}

function raiseException(e_33556607, ename_33556608) {
    e_33556607.name = ename_33556608;
    if ((excHandler == 0)) {
    unhandledException(e_33556607);
    }
    
    e_33556607.trace = nimCopy(null, rawWriteStackTrace_33556571(), NTI33554449);
    throw e_33556607;

  
}

function makeNimstrLit(c_33556741) {
      var result = [];
  for (var i = 0; i < c_33556741.length; ++i) {
    result[i] = c_33556741.charCodeAt(i);
  }
  return result;
  

  
}

function subInt(a_33556887, b_33556888) {
        var result = a_33556887 - b_33556888;
    checkOverflowInt(result);
    return result;
  

  
}

function eqStrings(a_33556874, b_33556875) {
        if (a_33556874 == b_33556875) return true;
    if (a_33556874 === null && b_33556875.length == 0) return true;
    if (b_33556875 === null && a_33556874.length == 0) return true;
    if ((!a_33556874) || (!b_33556875)) return false;
    var alen = a_33556874.length;
    if (alen != b_33556875.length) return false;
    for (var i = 0; i < alen; ++i)
      if (a_33556874[i] != b_33556875[i]) return false;
    return true;
  

  
}
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function contains_671088691(pattern_671088692, self_671088693) {
  var result_671088694 = false;

  var F = {procname: "jsre.contains", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
  framePtr = F;
    F.line = 61;
    result_671088694 = self_671088693.test(pattern_671088692);
  framePtr = F.prev;

  return result_671088694;

}

function isFatPointer_33557074(ti_33557075) {
  var result_33557076 = false;

  BeforeRet: {
    result_33557076 = !((ConstSet1[ti_33557075.base.kind] != undefined));
    break BeforeRet;
  };

  return result_33557076;

}

function nimCopyAux(dest_33557087, src_33557088, n_33557089) {
    switch (n_33557089.kind) {
    case 0:
      break;
    case 1:
            dest_33557087[n_33557089.offset] = nimCopy(dest_33557087[n_33557089.offset], src_33557088[n_33557089.offset], n_33557089.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557089.sons.length; i++) {
      nimCopyAux(dest_33557087, src_33557088, n_33557089.sons[i]);
    }
    
      break;
    case 3:
            dest_33557087[n_33557089.offset] = nimCopy(dest_33557087[n_33557089.offset], src_33557088[n_33557089.offset], n_33557089.typ);
      for (var i = 0; i < n_33557089.sons.length; ++i) {
        nimCopyAux(dest_33557087, src_33557088, n_33557089.sons[i][1]);
      }
    
      break;
    }

  
}

function add_33556386(x_33556387, x_33556387_Idx, y_33556388) {
          if (x_33556387[x_33556387_Idx] === null) { x_33556387[x_33556387_Idx] = []; }
      var off = x_33556387[x_33556387_Idx].length;
      x_33556387[x_33556387_Idx].length += y_33556388.length;
      for (var i = 0; i < y_33556388.length; ++i) {
        x_33556387[x_33556387_Idx][off+i] = y_33556388.charCodeAt(i);
      }
    

  
}

function raiseOverflow() {
    raiseException({message: [111,118,101,114,45,32,111,114,32,117,110,100,101,114,102,108,111,119], parent: null, m_type: NTI134217743, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33556881) {
        if (a_33556881 > 2147483647 || a_33556881 < -2147483648) raiseOverflow();
  

  
}

function raiseRangeError() {
    raiseException({message: [118,97,108,117,101,32,111,117,116,32,111,102,32,114,97,110,103,101], parent: null, m_type: NTI134217751, name: null, trace: [], up: null}, "RangeDefect");

  
}

function raiseIndexError(i_33556694, a_33556695, b_33556696) {
    var Temporary1;

    if ((b_33556696 < a_33556695)) {
    Temporary1 = [105,110,100,101,120,32,111,117,116,32,111,102,32,98,111,117,110,100,115,44,32,116,104,101,32,99,111,110,116,97,105,110,101,114,32,105,115,32,101,109,112,116,121];
    }
    else {
    Temporary1 = ([105,110,100,101,120,32] || []).concat(HEX24_369098760(i_33556694) || [],[32,110,111,116,32,105,110,32] || [],HEX24_369098760(a_33556695) || [],[32,46,46,32] || [],HEX24_369098760(b_33556696) || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554449), parent: null, m_type: NTI134217749, name: null, trace: [], up: null}, "IndexDefect");

  
}

function addChars_301990048(result_301990050, result_301990050_Idx, x_301990051, start_301990052, n_301990053) {
    var Temporary1;

  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 43;
    var old_301990054 = (result_301990050[result_301990050_Idx]).length;
    F.line = 44;
    if (result_301990050[result_301990050_Idx].length < (Temporary1 = chckRange(addInt(old_301990054, n_301990053), 0, 2147483647), Temporary1)) { for (var i = result_301990050[result_301990050_Idx].length; i < Temporary1; ++i) result_301990050[result_301990050_Idx].push(0); }
         else {result_301990050[result_301990050_Idx].length = Temporary1; };
    Label2: {
      F.line = 46;
      var iHEX60gensym4_301990068 = 0;
      F.line = 119;
      var i_654311453 = 0;
      Label3: {
        F.line = 120;
          Label4: while (true) {
          if (!(i_654311453 < n_301990053)) break Label4;
            F.line = 49;
            iHEX60gensym4_301990068 = i_654311453;
            F.line = 49;
            result_301990050[result_301990050_Idx][chckIndx(addInt(old_301990054, iHEX60gensym4_301990068), 0, (result_301990050[result_301990050_Idx]).length - 1)] = x_301990051.charCodeAt(chckIndx(addInt(start_301990052, iHEX60gensym4_301990068), 0, (x_301990051).length - 1));
            F.line = 122;
            i_654311453 = addInt(i_654311453, 1);
          }
      };
    };
  framePtr = F.prev;

  
}

function addChars_301990044(result_301990046, result_301990046_Idx, x_301990047) {
  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 55;
    addChars_301990048(result_301990046, result_301990046_Idx, x_301990047, 0, ((x_301990047) == null ? 0 : (x_301990047).length));
  framePtr = F.prev;

  
}

function addInt_301990069(result_301990070, result_301990070_Idx, x_301990071) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 111;
    addChars_301990044(result_301990070, result_301990070_Idx, ((x_301990071) + ""));
  framePtr = F.prev;

  
}

function addInt_301990087(result_301990088, result_301990088_Idx, x_301990089) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 115;
    addInt_301990069(result_301990088, result_301990088_Idx, x_301990089);
  framePtr = F.prev;

  
}

function HEX24_369098760(x_369098761) {
  var result_369098762 = [[]];

  var F = {procname: "dollars.$", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/dollars.nim", line: 0};
  framePtr = F;
    F.line = 18;
    addInt_301990087(result_369098762, 0, x_369098761);
  framePtr = F.prev;

  return result_369098762[0];

}

function auxWriteStackTrace_33556496(f_33556497) {
  var result_33556498 = [[]];

    var it_33556506 = f_33556497;
    var i_33556507 = 0;
    var total_33556508 = 0;
    var tempFrames_33556509 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555818);
    Label1: {
        Label2: while (true) {
        if (!(!((it_33556506 == null)) && (i_33556507 <= 63))) break Label2;
          tempFrames_33556509[i_33556507].Field0 = it_33556506.procname;
          tempFrames_33556509[i_33556507].Field1 = it_33556506.line;
          tempFrames_33556509[i_33556507].Field2 = it_33556506.filename;
          i_33556507 += 1;
          total_33556508 += 1;
          it_33556506 = it_33556506.prev;
        }
    };
    Label3: {
        Label4: while (true) {
        if (!!((it_33556506 == null))) break Label4;
          total_33556508 += 1;
          it_33556506 = it_33556506.prev;
        }
    };
    result_33556498[0] = nimCopy(null, [], NTI33554449);
    if (!((total_33556508 == i_33556507))) {
    result_33556498[0].push.apply(result_33556498[0], [40]);;
    result_33556498[0].push.apply(result_33556498[0], HEX24_369098760((total_33556508 - i_33556507)));;
    result_33556498[0].push.apply(result_33556498[0], [32,99,97,108,108,115,32,111,109,105,116,116,101,100,41,32,46,46,46,10]);;
    }
    
    Label5: {
      var j_33556542 = 0;
      var colontmp__654311445 = 0;
      colontmp__654311445 = (i_33556507 - 1);
      var res_654311447 = colontmp__654311445;
      Label6: {
          Label7: while (true) {
          if (!(0 <= res_654311447)) break Label7;
            j_33556542 = res_654311447;
            result_33556498[0].push.apply(result_33556498[0], cstrToNimstr(tempFrames_33556509[j_33556542].Field2));;
            if ((0 < tempFrames_33556509[j_33556542].Field1)) {
            result_33556498[0].push.apply(result_33556498[0], [40]);;
            addInt_301990087(result_33556498, 0, tempFrames_33556509[j_33556542].Field1);
            if (false) {
            result_33556498[0].push.apply(result_33556498[0], [44,32]);;
            addInt_301990087(result_33556498, 0, 0);
            }
            
            result_33556498[0].push.apply(result_33556498[0], [41]);;
            }
            
            result_33556498[0].push.apply(result_33556498[0], [32,97,116,32]);;
            add_33556386(result_33556498, 0, tempFrames_33556509[j_33556542].Field0);
            result_33556498[0].push.apply(result_33556498[0], [10]);;
            res_654311447 -= 1;
          }
      };
    };

  return result_33556498[0];

}

function rawWriteStackTrace_33556571() {
  var result_33556572 = [];

    if (!((framePtr == null))) {
    result_33556572 = nimCopy(null, ([84,114,97,99,101,98,97,99,107,32,40,109,111,115,116,32,114,101,99,101,110,116,32,99,97,108,108,32,108,97,115,116,41,10] || []).concat(auxWriteStackTrace_33556496(framePtr) || []), NTI33554449);
    }
    else {
      result_33556572 = nimCopy(null, [78,111,32,115,116,97,99,107,32,116,114,97,99,101,98,97,99,107,32,97,118,97,105,108,97,98,108,101,10], NTI33554449);
    }
    

  return result_33556572;

}

function newSeq_33556765(len_33556767) {
  var result_33556768 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 597;
    result_33556768 = new Array(len_33556767); for (var i = 0 ; i < len_33556767 ; ++i) { result_33556768[i] = null; }  framePtr = F.prev;

  return result_33556768;

}

function unhandledException(e_33556603) {
    var buf_33556604 = [[]];
    if (!(((e_33556603.message).length == 0))) {
    buf_33556604[0].push.apply(buf_33556604[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110,58,32]);;
    buf_33556604[0].push.apply(buf_33556604[0], e_33556603.message);;
    }
    else {
    buf_33556604[0].push.apply(buf_33556604[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110]);;
    }
    
    buf_33556604[0].push.apply(buf_33556604[0], [32,91]);;
    add_33556386(buf_33556604, 0, e_33556603.name);
    buf_33556604[0].push.apply(buf_33556604[0], [93,10]);;
    buf_33556604[0].push.apply(buf_33556604[0], rawWriteStackTrace_33556571());;
    var cbuf_33556605 = toJSStr(buf_33556604[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556605);
  }
  else {
    throw cbuf_33556605;
  }
  

  
}

function sysFatal_268435493(message_268435496) {
  var F = {procname: "sysFatal.sysFatal", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/fatal.nim", line: 0};
  framePtr = F;
    F.line = 51;
    raiseException({message: nimCopy(null, message_268435496, NTI33554449), m_type: NTI134217745, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function raiseAssert_268435491(msg_268435492) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 36;
    sysFatal_268435493(msg_268435492);
  framePtr = F.prev;

  
}

function failedAssertImpl_268435515(msg_268435516) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 46;
    raiseAssert_268435491(msg_268435516);
  framePtr = F.prev;

  
}
var F = {procname: "module jsre_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_1.nim", line: 0};
framePtr = F;
F.line = 56;
var jsregex_654311426 = new RegExp("bc$", "i");
if (!(contains_671088691("abc", jsregex_654311426))) {
F.line = 56;
failedAssertImpl_268435515(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_1.nim(9, 3) `jsregex in r\"abc\"` "));
}

if (!(!(contains_671088691("abcd", jsregex_654311426)))) {
F.line = 56;
failedAssertImpl_268435515(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_1.nim(10, 3) `jsregex notin r\"abcd\"` "));
}

if (!(contains_671088691("xabc", jsregex_654311426))) {
F.line = 56;
failedAssertImpl_268435515(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_1.nim(11, 3) `\"xabc\".contains jsregex` "));
}

framePtr = F.prev;
var F = {procname: "module jsre_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function startsWith_671088695(pattern_671088696, self_671088697) {
  var result_671088698 = false;

  var F = {procname: "jsre.startsWith", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
  framePtr = F;
    F.line = 64;
    result_671088698 = contains_671088691(pattern_671088696, new RegExp(toJSStr(([94] || []).concat(cstrToNimstr(self_671088697.source) || [])), self_671088697.flags));
  framePtr = F.prev;

  return result_671088698;

}
var F = {procname: "module jsre_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_2.nim", line: 0};
framePtr = F;
F.line = 65;
var jsregex_687865858 = new RegExp("abc", "i");
if (!(startsWith_671088695("abcd", jsregex_687865858))) {
F.line = 65;
failedAssertImpl_268435515(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_2.nim(9, 3) `\"abcd\".startsWith jsregex` "));
}

framePtr = F.prev;
var F = {procname: "module jsre_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_2.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function endsWith_671088708(pattern_671088709, self_671088710) {
  var result_671088711 = false;

  var F = {procname: "jsre.endsWith", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
  framePtr = F;
    F.line = 71;
    result_671088711 = contains_671088691(pattern_671088709, new RegExp(toJSStr((cstrToNimstr(self_671088710.source) || []).concat([36] || [])), self_671088710.flags));
  framePtr = F.prev;

  return result_671088711;

}
var F = {procname: "module jsre_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_3.nim", line: 0};
framePtr = F;
F.line = 72;
var jsregex_704643074 = new RegExp("bcd", "i");
if (!(endsWith_671088708("abcd", jsregex_704643074))) {
F.line = 72;
failedAssertImpl_268435515(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_3.nim(9, 3) `\"abcd\".endsWith jsregex` "));
}

framePtr = F.prev;
var F = {procname: "module jsre_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_3.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function HEX3DHEX3D_721420300(x_721420302, y_721420303) {
  var result_721420304 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/comparisons.nim", line: 0};
  framePtr = F;
  BeforeRet: {
    F.line = 326;
    var sameObject_721420312 = false;
    F.line = 327;
    sameObject_721420312 = x_721420302 === y_721420303
    if (sameObject_721420312) {
    F.line = 328;
    result_721420304 = true;
    break BeforeRet;
    }
    
    if (!(((x_721420302).length == (y_721420303).length))) {
    F.line = 331;
    result_721420304 = false;
    break BeforeRet;
    }
    
    Label1: {
      F.line = 333;
      var i_721420326 = 0;
      F.line = 75;
      var colontmp__721420438 = 0;
      F.line = 333;
      colontmp__721420438 = subInt((x_721420302).length, 1);
      F.line = 90;
      var res_721420440 = 0;
      Label2: {
        F.line = 91;
          Label3: while (true) {
          if (!(res_721420440 <= colontmp__721420438)) break Label3;
            F.line = 333;
            i_721420326 = res_721420440;
            if (!((x_721420302[chckIndx(i_721420326, 0, (x_721420302).length - 1)] == y_721420303[chckIndx(i_721420326, 0, (y_721420303).length - 1)]))) {
            F.line = 335;
            result_721420304 = false;
            break BeforeRet;
            }
            
            F.line = 93;
            res_721420440 = addInt(res_721420440, 1);
          }
      };
    };
    F.line = 337;
    result_721420304 = true;
    break BeforeRet;
  };
  framePtr = F.prev;

  return result_721420304;

}

function HEX24_671088688(self_671088689) {
  var result_671088690 = [];

  var F = {procname: "jsre.$", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
  framePtr = F;
    F.line = 52;
    result_671088690 = nimCopy(null, cstrToNimstr(self_671088689.toString()), NTI33554449);
  framePtr = F.prev;

  return result_671088690;

}

function HEX3Aanonymous_721420375(m_721420376) {
  var result_721420377 = null;

  var F = {procname: "jsre_examples_4.:anonymous", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim", line: 0};
  framePtr = F;
    F.line = 24;
    result_721420377 = toJSStr((cstrToNimstr(m_721420376[chckIndx(0, 0, (m_721420376).length - 1)]) || []).concat(HEX24_369098760((m_721420376).length) || []));
  framePtr = F.prev;

  return result_721420377;

}
var F = {procname: "module jsre_examples_4", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim", line: 0};
framePtr = F;
F.line = 78;
var jsregex_721420290 = new RegExp("\\s+", "i");
F.line = 78;
jsregex_721420290.compile("\\w+", "i");
if (!(contains_671088691("nim javascript", jsregex_721420290))) {
F.line = 78;
failedAssertImpl_268435515(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(10, 3) `\"nim javascript\".contains jsregex` "));
}

if (!(HEX3DHEX3D_721420300((jsregex_721420290.exec("nim javascript") || []), ["nim"]))) {
F.line = 78;
failedAssertImpl_268435515(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(11, 3) `jsregex.exec(r\"nim javascript\") == @[\"nim\".cstring]` "));
}

if (!((jsregex_721420290.toString() == "/\\w+/i"))) {
F.line = 78;
failedAssertImpl_268435515(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(12, 3) `jsregex.toCstring() == r\"/\\w+/i\"` "));
}

F.line = 78;
jsregex_721420290.compile("[0-9]", "i");
if (!(contains_671088691("0123456789abcd", jsregex_721420290))) {
F.line = 78;
failedAssertImpl_268435515(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(14, 3) `\"0123456789abcd\".contains jsregex` "));
}

if (!(eqStrings(HEX24_671088688(jsregex_721420290), [47,91,48,45,57,93,47,105]))) {
F.line = 78;
failedAssertImpl_268435515(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(15, 3) `$jsregex == \"/[0-9]/i\"` "));
}

F.line = 78;
jsregex_721420290.compile("abc", "i");
if (!(startsWith_671088695("abcd", jsregex_721420290))) {
F.line = 78;
failedAssertImpl_268435515(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(17, 3) `\"abcd\".startsWith jsregex` "));
}

if (!(endsWith_671088708("dabc", jsregex_721420290))) {
F.line = 78;
failedAssertImpl_268435515(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(18, 3) `\"dabc\".endsWith jsregex` "));
}

F.line = 78;
jsregex_721420290.compile("\\d", "i");
if (!(HEX3DHEX3D_721420300(("do1ne".split(jsregex_721420290) || []), ["do", "ne"]))) {
F.line = 78;
failedAssertImpl_268435515(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(20, 3) `\"do1ne\".split(jsregex) == @[\"do\".cstring, \"ne\".cstring]` "));
}

F.line = 78;
jsregex_721420290.compile("[lw]", "i");
if (!(("hello world".replace(jsregex_721420290, "X") == "heXlo world"))) {
F.line = 78;
failedAssertImpl_268435515(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(22, 3) `\"hello world\".replace(jsregex, \"X\") == \"heXlo world\"` "));
}

F.line = 78;
jsregex_721420290.compile("([a-z])\\1*", "g");
if (!(("abbcccdddd".replace(jsregex_721420290, HEX3Aanonymous_721420375) == "a1b2c3d4"))) {
F.line = 78;
failedAssertImpl_268435515(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(24, 3) `\"abbcccdddd\".replace(jsregex, proc (m: varargs[cstring]): cstring =\x0A  ($m[0] & $(m.len)).cstring) ==\x0A    \"a1b2c3d4\"` "));
}

F.line = 78;
var digitsRegex_721420387 = new RegExp("\\d");
if (!(HEX3DHEX3D_721420300(("foo".match(digitsRegex_721420387) || []), []))) {
F.line = 78;
failedAssertImpl_268435515(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(26, 3) `\"foo\".match(digitsRegex) == @[]` "));
}

framePtr = F.prev;
var F = {procname: "module jsre_examples_4", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
